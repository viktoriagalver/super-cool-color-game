import { Text, StyleSheet, Pressable } from "react-native";

function GameEndScreen(props) {
  let content;
  if (props.win) {
    content = "Win!!! \n Your Streak is " + props.streak.toString();
  } else {
    content = "You loose ... \n Keep practicing!!!";
  }
  return (
    <Pressable
      style={[styles.canvas, { backgroundColor: props.color }]}
      onPress={props.handlePress}
    >
      <Text style={styles.text}>{content}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  canvas: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#ffffff",
  },
});

export default GameEndScreen;
