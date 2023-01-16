import { Text, View } from "react-native";
import { getRandomColor, styles } from "./GameScreen";
import ColorFieldButton from "../components/ColorFieldButton";
import ColorInputField from "../components/ColorInputField";
import Button from "../components/Button";

function GameScreen2() {
  // get a random color to look for
  const randomColor = getRandomColor();

  const randomRGB = `rgb(${randomColor.r},${randomColor.g},${randomColor.b})`;

  return( 
  <View style={styles.gameScreenContainer}>

      {/* Task and RGB color */}
      <View style={styles.taskField}>
        <Text style={styles.explanationText}>
          Welche Farbe wird hier gesucht?
        </Text>
        <ColorFieldButton color={randomRGB} />
      </View>
      <ColorInputField />
  </View>
  );
};

export default GameScreen2;