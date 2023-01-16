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
  <StartScreen />;
  const [currentScreen, setCurrentScreen] = useState("GameScreen1"); //enter the start screen into the useState() function
  const [game1Win, setGame1Win] = useState(null);
  const [game1Streak, setGame1Streak] = useState(0);
  const [game1HighScore, setGame1Highscore] = useState(0);
  const [randomColor, setRandomColor] = useState(getRandomColor());

  let currentScreenJSX;
  console.log("Render: ", currentScreen);

  // Load current Highscore
  useEffect(() => {
    getHighScore().then((data) => {
      if (isNaN(data.score)) {
        storeHighScore({ score: 0 });
        setGame1Highscore(0);
      } else {
        setGame1Highscore(data.score);
      }
      console.log("Current Highscore: ", data.score);
    });
  }, []);

  // triggers after user presses on end screen of game 1
  const handleGameEndScreenPress = () => {
    // start new game
    setCurrentScreen("GameScreen1");
  };

  // triggers after the user selects a color
  const handleFinihsedGame1 = (win) => {
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

  // Highscore
  async function storeHighScore(value) {
    try {
      console.log("Storing new Highscore: ", value);
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("Highscore", jsonValue);
    } catch (error) {
      console.log("ERROR (storeHighScore): ", error);
    }
  }

  async function getHighScore() {
    try {
      const value = await AsyncStorage.getItem("Highscore");
      return JSON.parse(value);
    } catch (error) {
      console.log("ERROR (getHighScore): ", error);
    }
  }

  // manages the different app screens. The variable "currentScreen" defines the screen to be shown
  switch (currentScreen) {
    case "GameScreen1":
      currentScreenJSX = (
        <GameScreen
          wonGame1={(win) => {
            handleFinihsedGame1(win);
          }}
          getRandomColor={getRandomColor()}
        />
      );
      break;
    case "GameScreen1_End":
      currentScreenJSX = (
        <GameEndScreen
          color={"#000000"} //TODO: add color that the player is searching
          win={game1Win}
          streak={game1Streak}
          highScore={game1HighScore}
          handlePress={() => {
            handleGameEndScreenPress();
          }}
        />
      );
      break;
    case "GameScreen2":
      currentScreenJSX = <GameScreen2 color={randomColor} />;
      break;
  }

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
