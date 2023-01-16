import { Text, StyleSheet, Pressable } from "react-native";

function GameEndScreen(props) {
  let content;
  let streak;

  if (props.win) {
    content = "That's right! :)";
    streak = props.streak
  } else {
    content = "That's wrong ...";
    streak = ":("
  }
  return (
    <Pressable
      style={[styles.canvas /* , { backgroundColor: props.color } */]}
      onPress={props.handlePress}
    >
      <Text style={styles.text}>{content}</Text>
      <Text style={styles.streak}>{streak}</Text>
      <Text style={styles.text}>Highscore</Text>
      <Text style={styles.streak}>{props.highScore}</Text>
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
    fontSize: 24
  },
  streak: {
    margin: 16,
    fontSize: 48
  }
});

export default GameEndScreen;
