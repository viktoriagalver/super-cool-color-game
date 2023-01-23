import ColorFieldButton from "../components/ColorFieldButton";
import { View, StyleSheet, Text } from "react-native";
import colorObjectToString from "../services/colorObjectToString";

function GameScreen(props) {
  // handle the users color seleciton
  const handlePress = (color) => {
    // check whether the user is right or wrong
    if(color === randomColor) {
      console.log("You Win! :)")
      // send information about the outcome to the parent component (App.js)
      props.wonGame1(true)
    } else {
      console.log("You Loose! :(");
      // send information about the outcome to the parent component (App.js)
      props.wonGame1(false);
    }
  }
  // get a random color to look for
  const randomColor = props.color

  // get 3 random colors
  // differenceSum defines how equal/unequal they look. A high differenceSum makes the game more easy
  const differenceSum = 61 // max 61
  const disguiseColors = getAllDisguiseColors(randomColor, differenceSum)

  // array with all 4 colors that the user can select from
  let colorsInField = disguiseColors
  colorsInField.push(randomColor)

  // shuffle order of the color fields
  colorsInField = shuffleArray(colorsInField)

  return (
    <View style={styles.gameScreenContainer}>
      {/* Explain Task and show RGB color */}
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
        <ColorFieldButton
          handlePress={() => {
            handlePress(colorsInField[0]);
          }}
          color={colorObjectToString(colorsInField[0])}
        />
        <ColorFieldButton
          handlePress={() => {
            handlePress(colorsInField[1]);
          }}
          color={colorObjectToString(colorsInField[1])}
        />
        <ColorFieldButton
          handlePress={() => {
            handlePress(colorsInField[2]);
          }}
          color={colorObjectToString(colorsInField[2])}
        />
        <ColorFieldButton
          handlePress={() => {
            handlePress(colorsInField[3]);
          }}
          color={colorObjectToString(colorsInField[3])}
        />
      </View>
    </View>
  );
}

// shuffles an array
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));

    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

// Get 3 random numbers that add up to sum
function getRandomPointsToSum(sum) {
  // generate 2 random points to divide a scale into 3 sections
  let randomPoints = [];
  randomPoints.push(Math.floor(Math.random() * (sum + 1)));
  randomPoints.push(Math.floor(Math.random() * (sum + 1)));
  // sort points from low to high
  randomPoints.sort((a, b) => {
    return a - b;
  });

  // calc length of the 3 sections on the scale
  const randomInt_1 = randomPoints[0];
  const randomInt_2 = randomPoints[1] - randomPoints[0];
  const randomInt_3 = sum - randomPoints[1];

  // return an array of 3 random points which add up to a sum
  return [randomInt_1, randomInt_2, randomInt_3];
}

// get a color which differs for a fixed value (colorDiff[3]) from the input color
function calcDisguiseColor (color, colorDiff) {
  let colorResult = {
    r: undefined,
    g: undefined,
    b: undefined,
  };

  // calculate r value
  // check if addition and substraction is possible
  if (color.r - colorDiff[0] >= 0 && color.r + colorDiff[0] <= 255) {
    // randomize addition or substraction
    const direction = Math.round(Math.random());
    if (direction < 1) {
      colorResult.r = color.r - colorDiff[0];
    } else {
      colorResult.r = color.r + colorDiff[0];
    }
  }
  // check if substraction or addition is possible
  else if (color.r - colorDiff[0] >= 0) {
    colorResult.r = color.r - colorDiff[0];
  } else {
    colorResult.r = color.r + colorDiff[0];
  }

  // calculate g value
  // check if addition and substraction is possible
  if (color.g - colorDiff[1] >= 0 && color.g + colorDiff[1] <= 255) {
    // randomize addition or substraction
    const direction = Math.round(Math.random());
    if (direction < 1) {
      colorResult.g = color.g - colorDiff[1];
    } else {
      colorResult.g = color.g + colorDiff[1];
    }
  }
  // check if substraction or addition is possible
  else if (color.g - colorDiff[1] >= 0) {
    colorResult.g = color.g - colorDiff[1];
  } else {
    colorResult.g = color.g + colorDiff[1];
  }

  // calculate b value
  // check if addition and substraction is possible
  if (color.b - colorDiff[2] >= 0 && color.b + colorDiff[2] <= 255) {
    // randomize addition or substraction
    const direction = Math.round(Math.random());
    if (direction < 1) {
      colorResult.b = color.b - colorDiff[2];
    } else {
      colorResult.b = color.b + colorDiff[2];
    }
  }
  // check if substraction or addition is possible
  else if (color.b - colorDiff[2] >= 0) {
    colorResult.b = color.b - colorDiff[2];
  } else {
    colorResult.b = color.b + colorDiff[2];
  }

  // return new color
  return colorResult;
}

// return an array of 3 disguise colors
function getAllDisguiseColors(color, differenceSum) {
  // get 3x 3 random points that add up to a sum
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


export const styles = StyleSheet.create({
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