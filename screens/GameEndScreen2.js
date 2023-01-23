import { Text, StyleSheet, Pressable, View, Button } from "react-native";

function GameEndScreen2(props) {
  let content;
  let smiley;

  // check for the outcome of the last game and change the content on the screen depending on the result
  if (props.win) {
    content = "That's right! :)";
    smiley = ":)";
  } else {
    content = "That's wrong ...";
    smiley = ":(";
  }
  return (
    <Pressable
      style={[styles.canvas, { backgroundColor: props.color }]}
      onPress={props.handlePress}
    >
      <Text style={styles.text}>{content}</Text>
      <Text style={styles.smiley}>{smiley}</Text>
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
  smiley: {
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

export default GameEndScreen2;
