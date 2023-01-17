import { StyleSheet, Text, View } from "react-native";
import GameButton from "../components/GameButton";

function StartScreen(props) {
  return (
    <View>
      <Text style={styles.text}>Choose a game:</Text>
      <GameButton
        onButton1Press={props.onButton1Press}
        onButton2Press={props.onButton2Press}
      />
    </View>
  );
}

//styling!!
const styles = StyleSheet.create({
  text: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 35,
    color: "#000",
  },
});

export default StartScreen;
