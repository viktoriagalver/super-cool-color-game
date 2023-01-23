import { Text, StyleSheet, Pressable, View, Button } from "react-native";
import colorObjectToString from "../services/colorObjectToString";

function GameEndScreen2(props) {
  let content;
  let smiley;

    //text color depending on background color
    function getTextColor() {
      if ((props.color.r + props.color.g + props.color.b) > 350) {
        return ('#000')
      } else {
        return ('#fff')
      }
    };
    const textColor = getTextColor();

    const randomRGB = colorObjectToString(props.color)

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
      style={[styles.canvas, { backgroundColor: randomRGB }]}
      onPress={props.handlePress}
    >
      <Text style={[styles.text, {color: textColor}]}>{content}</Text>
      <Text style={[styles.smiley, {color: textColor}]}>{smiley}</Text>
      <View style={[styles.button, {color: textColor}]}>
        <Button
          title={"Menu"}
          onPress={props.onMenuButtonPress}
          color={textColor}
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
