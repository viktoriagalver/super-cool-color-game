import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import GameScreen from "./screens/GameScreen";
import GameScreen2 from "./screens/GameScreen2";
import GameEndScreen from "./screens/GameEndScreen";
import StartScreen from "./screens/StartScreen";
import { useEffect, useState } from "react";
import { getRandomColor } from "./services/getRandomColor";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GameEndScreen2 from "./screens/GameEndScreen2";

export default function App() {
  /*---------------------------------------------------------------------------------- 
  Setup
  -----------------------------------------------------------------------------------*/

  /* component data */
  const [currentScreen, setCurrentScreen] = useState("StartScreen"); //start app on the start screen
  const [gameWin, setGameWin] = useState(null); // did you win game 1?
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
  const handleMenuButtonPress = () => {
    setCurrentScreen("StartScreen");
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
    //get new random color
    setRandomColor(getRandomColor());
    // start new game 1
    setCurrentScreen("GameScreen1");
  };

  // triggers after the user selects a color
  const handleFinisedGame1 = (win) => {
    if (win) {
      // set feedback for Game End Screen
      setGameWin(true);
      const newGame1Streak = game1Streak + 1;
      setGame1Streak(newGame1Streak);

      // chech for new Highscore
      if (game1HighScore < newGame1Streak) {
        // Save Highscore
        storeHighScore({ score: newGame1Streak });
        setGame1Highscore(newGame1Streak);
      }
    } else {
      // set feedback for Game End Screen
      setGameWin(false);
      setGame1Streak(0);
    }
    // change to Game End Screen
    setCurrentScreen("GameScreen1_End");
  };

  /*---------------------------------------------------------------------------------- 
  Game 1
  -----------------------------------------------------------------------------------*/
  // Game1 End Screen Button handler
  const handleGameEndScreen2Press = () => {
    setRandomColor(getRandomColor());
    // start new game 1
    setCurrentScreen("GameScreen2");
  };

  // triggers after the user confirms a color
  const handleFinisedGame2 = (win) => {
    // set feedback for Game End Screen
    setGameWin(win);
    // change to Game End Screen
    setCurrentScreen("GameScreen2_End");
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
          color={randomColor}
        />
      );
      break;
    case "GameScreen1_End":
      currentScreenJSX = (
        <GameEndScreen
          color={randomColor}
          win={gameWin}
          streak={game1Streak}
          handlePress={() => {
            handleGameEndScreenPress();
          }}
          highscore={game1HighScore}
          onMenuButtonPress={handleMenuButtonPress}
        />
      );
      break;
    case "GameScreen2_End":
      currentScreenJSX = (
        <GameEndScreen2
          color={randomColor}
          win={gameWin}
          handlePress={() => {
            handleGameEndScreen2Press();
          }}
          highscore={game1HighScore}
          onMenuButtonPress={handleMenuButtonPress}
        />
      );
      break;
    case "GameScreen2":
      currentScreenJSX = (
        <GameScreen2
          color={randomColor}
          wonGame2={(win) => {
            handleFinisedGame2(win);
          }}
        />
      );
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
