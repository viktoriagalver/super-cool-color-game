import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import GameScreen from "./screens/GameScreen";
import GameScreen2 from "./screens/GameScreen2";
import GameEndScreen from "./screens/GameEndScreen";
import StartScreen from "./screens/StartScreen";
import { useEffect, useState } from "react";
import { getRandomColor } from "./services/getRandomColor";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  /*---------------------------------------------------------------------------------- 
  Setup
  -----------------------------------------------------------------------------------*/

  /* component data */
  const [currentScreen, setCurrentScreen] = useState("StartScreen"); //start app on the start screen
  const [game1Win, setGame1Win] = useState(null); // did you win game 1?
  const [game1Streak, setGame1Streak] = useState(0); // length of current win streak in game 1
  const [game1HighScore, setGame1Highscore] = useState(0); // longest win streak in game 1
  const [randomColor, setRandomColor] = useState(getRandomColor()); // get a random r,g,b color object

  let currentScreenJSX; //Name(String) of current Screen
  console.log("Render: ", currentScreen);

  // Load current Highscore from async storage
  useEffect(() => {
    getHighScore().then((data) => {
      // set Highscore: 0 if there is now Highscore stored
      if (isNaN(data.score)) {
        // save in async storage
        storeHighScore({ score: 0 });
        // save highscore in component data
        setGame1Highscore(0);
      } else {
        // save highscore from async storage in component data
        setGame1Highscore(data.score);
      }
      console.log("Current Highscore: ", data.score);
    });
  }, []);

  // Game Selection Button handler
  const handleGame1ButtonPress = () => {
    // Change to Game 1
    setCurrentScreen("GameScreen1");
  };
  const handleGame2ButtonPress = () => {
    // Change to Game 2
    setCurrentScreen("GameScreen2");
  };

  // store Highscore in async storage
  async function storeHighScore(value) {
    try {
      console.log("Storing new Highscore: ", value);
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("Highscore", jsonValue);
    } catch (error) {
      console.log("ERROR (storeHighScore): ", error);
    }
  }

  // get Highscore from async storage
  async function getHighScore() {
    try {
      const value = await AsyncStorage.getItem("Highscore");
      return JSON.parse(value);
    } catch (error) {
      console.log("ERROR (getHighScore): ", error);
    }
  }

  /*---------------------------------------------------------------------------------- 
  Game 1
  -----------------------------------------------------------------------------------*/

  // Game1 End Screen Button handler
  const handleGameEndScreenPress = () => {
    // start new game 1
    setCurrentScreen("GameScreen1");
  };

  // triggers after the user selects a color
  const handleFinisedGame1 = (win) => {
    if (win) {
      // set feedback for Game End Screen
      setGame1Win(true);
      setGame1Streak(game1Streak + 1);

      // chech for new Highscore
      if (game1HighScore < game1Streak) {
        // Save Highscore
        storeHighScore({ score: game1Streak });
        setGame1Highscore(game1Streak);
      }
    } else {
      // set feedback for Game End Screen
      setGame1Win(false);
      setGame1Streak(0);
    }
    // change to Game End Screen
    setCurrentScreen("GameScreen1_End");
  };

  /*---------------------------------------------------------------------------------- 
  Screen Manager
  -----------------------------------------------------------------------------------*/

  // manages the different app screens. The variable "currentScreen" defines the screen to be shown
  switch (currentScreen) {
    case "StartScreen":
      currentScreenJSX = (
        <StartScreen
          onButton1Press={handleGame1ButtonPress}
          onButton2Press={handleGame2ButtonPress}
        />
      );
      break;
    case "GameScreen1":
      currentScreenJSX = (
        <GameScreen
          wonGame1={(win) => {
            handleFinisedGame1(win);
          }}
          color={getRandomColor()}
        />
      );
      break;
    case "GameScreen1_End":
      currentScreenJSX = (
        <GameEndScreen
          color={"#000000"}
          win={game1Win}
          streak={game1Streak}
          handlePress={() => {
            handleGameEndScreenPress();
          }}
          highscore={game1HighScore}
        />
      );
      break;
    case "GameScreen2":
      currentScreenJSX = <GameScreen2 color={randomColor} />;
      break;
  }

  /*---------------------------------------------------------------------------------- 
  rendering
  -----------------------------------------------------------------------------------*/

  return (
    <View style={styles.container}>
      {/* Gets the screen from the switch case function */}
      {currentScreenJSX}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
