import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import GameScreen from "./screens/GameScreen";
import GameScreen2 from "./screens/GameScreen2";
import GameEndScreen from "./screens/GameEndScreen";
import { useState } from "react";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("GameScreen1"); //enter the start screen into the useState() function
  const [game1Win, setGame1Win] = useState(null);
  const [game1Streak, setGame1Streak] = useState(0);
  const [game1TargetColor, setGame1TargetColor] = useState(null);

  let currentScreenJSX;
  console.log("Render: ", currentScreen);

  // triggers after user presses on end screen of game 1
  const handleGameEndScreenPress = () => {
    // start new game
    setCurrentScreen("GameScreen1");
  };

  // triggers after the user selects a color
  const handleFinisedGame1 = (win) => {
    if (win) {
      // set feedback for Game End Screen
      setGame1Win(true);
      setGame1Streak(game1Streak + 1);
    } else {
      // set feedback for Game End Screen
      setGame1Win(false);
      setGame1Streak(0);
    }
    // change to Game End Screen
    setCurrentScreen("GameScreen1_End");
  };

  const getGame1TargetColor = (color) => {
    console.log(color)
    // TODO: solve infinite loop bug
    // setGame1TargetColor(color)
  }

  // manages the different app screens. The variable "currentScreen" defines the screen to be shown
  switch (currentScreen) {
    case "GameScreen1":
      currentScreenJSX = (
        <GameScreen
          wonGame1={(win) => {
            handleFinisedGame1(win);
          }}
          targetColor={(color) => {
            getGame1TargetColor(color)
          }}
        />
      );
      break;
    case "GameScreen1_End":
      currentScreenJSX = (
        <GameEndScreen
          color={"#000000"} //TODO: add color that the player is searching
          win={game1Win}
          streak={game1Streak}
          handlePress={() => {
            handleGameEndScreenPress();
          }}
        />
      );
      break;
    case "GameScreen2":
      currentScreenJSX = <GameScreen2 />;
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
