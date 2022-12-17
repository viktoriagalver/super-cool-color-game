import ColorFieldButton from "../components/color-field-button";
import { View, StyleSheet, Text } from "react-native";

function GameScreen() {
  // get a random color to look for
  const randomColor = getRandomColor()

  //TODO: logic for color creation

  return (
    <View style={styles.gameScreenContainer}>

      {/* Task and RGB color */}
      <View style={styles.taskField}>
        <Text style={styles.explanationText}>
          Welche Farbe wird hier gesucht?
        </Text>
        <Text style={styles.colorText}>
          rgb({randomColor.r},{randomColor.g},{randomColor.b})
        </Text>
      </View>

      {/* Color Selection Field */}
      <View style={styles.colorField}>
        <ColorFieldButton color="#D05353" />
        <ColorFieldButton color="#E58F65" />
        <ColorFieldButton color="#F9E784" />
        <ColorFieldButton color="#F1E8B8" />
      </View>

    </View>
  );
}

// function returns a random color object with r,g and b values between 0 and 255
function getRandomColor() {
  // Generate random color gradients between 0 and max 256 (excluding 256)
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return {
    r: red,
    g: green,
    b: blue
  }
}


const styles = StyleSheet.create({
  gameScreenContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  taskField: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  colorField: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  explanationText: {
    fontSize: 16,
    margin: 12
  },
  colorText: {
    fontSize: 24,
    fontWeight: "bold"
  },
});

export default GameScreen;