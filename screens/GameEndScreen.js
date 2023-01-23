import { Text, StyleSheet, Pressable, View, Button } from "react-native";

function GameEndScreen(props) {
  let content;
  let streak;

  // check for the outcome of the last game and change the content on the screen depending on the result
  if (props.win) {
    content = "That's right! :)";
    streak = props.streak
  } else {
    content = "That's wrong ...";
    streak = ":("
  }
  return (
    <Pressable
      style={[styles.canvas, { backgroundColor: props.color }]}
      onPress={props.handlePress}
    >
      <Text style={styles.text}>{content}</Text>
      <Text style={styles.streak}>{streak}</Text>
      <View style={styles.highScore}>
        <Text style={styles.text}>Highscore</Text>
        <Text style={styles.streak}>{props.highscore}</Text>
      </View>
      <View style={styles.button}>
        <Button
          title={"Menu"}
          onPress={props.onMenuButtonPress}
          color="white"
        />
      </View>
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
    fontSize: 24,
  },
  streak: {
    margin: 16,
    fontSize: 48,
  },
  highScore: {
    display: "flex",
    alignItems: "center",
    marginTop: 64,
  },
  button: {
    position: "absolute",
    bottom: 64,
  },
});

export default GameEndScreen;
