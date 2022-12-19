import ColorFieldButton from "../components/color-field-button";
import { View, StyleSheet, Text } from "react-native";

function GameScreen() {
  // get a random color to look for
  const randomColor = getRandomColor()

  // get 3 random colors. differenceSum defines how equal/unequal they look.
  const differenceSum = 61 // max 61
  const disguiseColors = getAllDisguiseColors(randomColor, differenceSum)

  // array with all 4 colors
  let colorsInField = disguiseColors
  colorsInField.push(randomColor)

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
        <ColorFieldButton color={colorObjectToString(colorsInField[0])} />
        <ColorFieldButton color={colorObjectToString(colorsInField[1])} />
        <ColorFieldButton color={colorObjectToString(colorsInField[2])} />
        <ColorFieldButton color={colorObjectToString(colorsInField[3])} />
      </View>
    </View>
  );
}

// shuffles an array
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    // Generate random number
    var j = Math.floor(Math.random() * (i + 1));

    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

// converts color object to rgb() string
function colorObjectToString(color) {
  const colorString = "rgb(" + color.r + "," + color.g + "," + color.b + ")"
  return colorString
}

// Generate a random color object with r,g and b values between 0 and 255
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

// Get random numbers that add up to a given sum
function getRandomPointsToSum(sum) {
  // generate random points to divide a scale
  let randomPoints = [];
  randomPoints.push(Math.floor(Math.random() * (sum + 1)));
  randomPoints.push(Math.floor(Math.random() * (sum + 1)));
  // sort points from low to high
  randomPoints.sort((a, b) => {
    return a - b;
  });

  // calc length of scale
  const randomInt_1 = randomPoints[0];
  const randomInt_2 = randomPoints[1] - randomPoints[0];
  const randomInt_3 = sum - randomPoints[1];

  // return an array of 3 random points which add up to sum
  return [randomInt_1, randomInt_2, randomInt_3];
}

// get a disguise color
function calcDisguiseColor (color, colorDiff) {
  let color_result = {
    r: undefined,
    g: undefined,
    b: undefined
  };

  // r value
  if (color.r - colorDiff[0] >= 0 && color.r + colorDiff[0] <= 255) {
    const direction = Math.round(Math.random());
    if (direction < 1) {
      color_result.r = color.r - colorDiff[0];
    } else {
      color_result.r = color.r + colorDiff[0];
    }
  } else if (color.r - colorDiff[0] >= 0) {
    color_result.r = color.r - colorDiff[0];
  } else {
    color_result.r = color.r + colorDiff[0];
  }

  // g value
  if (color.g - colorDiff[1] >= 0 && color.g + colorDiff[1] <= 255) {
    const direction = Math.round(Math.random());
    if (direction < 1) {
      color_result.g = color.g - colorDiff[1];
    } else {
      color_result.g = color.g + colorDiff[1];
    }
  } else if (color.g - colorDiff[1] >= 0) {
    color_result.g = color.g - colorDiff[1];
  } else {
    color_result.g = color.g + colorDiff[1];
  }

  // b value
  if (color.b - colorDiff[2] >= 0 && color.b + colorDiff[2] <= 255) {
    const direction = Math.round(Math.random());
    if (direction < 1) {
      color_result.b = color.b - colorDiff[2];
    } else {
      color_result.b = color.b + colorDiff[2];
    }
  } else if (color.b - colorDiff[2] >= 0) {
    color_result.b = color.b - colorDiff[2];
  } else {
    color_result.b = color.b + colorDiff[2];
  }

  return color_result
}

// return an array of 3 disguise colors
function getAllDisguiseColors(color, differenceSum) {
  // get 3 color differences
  const colorDiff_1 = getRandomPointsToSum(differenceSum);
  const colorDiff_2 = getRandomPointsToSum(2 * differenceSum);
  const colorDiff_3 = getRandomPointsToSum(3* differenceSum);

  // return 3 different colors
  return [
    calcDisguiseColor(color, colorDiff_1),
    calcDisguiseColor(color, colorDiff_2),
    calcDisguiseColor(color, colorDiff_3)
  ];
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