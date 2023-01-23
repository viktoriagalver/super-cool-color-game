import { StyleSheet, Text, View } from "react-native";
import ColorFieldButton from "../components/ColorFieldButton";
import ColorInputField from "../components/ColorInputField";
import Button from "../components/Button";
import React from "react";
import colorObjectToString from "../services/colorObjectToString";

function GameScreen2(props) {

  //get rgb color as string

  const randomRGB = colorObjectToString(props.color)

  //button text color depending on background color
  function getTextColor() {
    if ((props.color.r + props.color.g + props.color.b) > 350) {
      return ('#000')
    } else {
      return ('#fff')
    }
  };
  const textColor = getTextColor();

  const [input1, setInput1] = React.useState('');
  const [input2, setInput2] = React.useState('');
  const [input3, setInput3] = React.useState('');

  // get User Input as rgb String
  const userInput = `rgb(${input1},${input2},${input3})`;

  // check if user input is right or wrong 
  const handlePress = () => {
    setInput1('');
    setInput2('');
    setInput3('');
    if(userInput === randomRGB) {
      console.log("WIN!!!")
      props.wonGame2(true);
    } else {
      console.log("LOOSE!!!")
      props.wonGame2(false);
    }
  }

  return( 
  <View style={styles.gameScreenContainer}>

      {/* Task and RGB color */}
      <View style={styles.taskField}>
        <Text style={styles.explanationText}>
          Welche Farbe wird hier gesucht?
        </Text>
        <ColorFieldButton color={randomRGB} />
      </View>
      <ColorInputField input1={input1} input2={input2} input3={input3} onChange1={setInput1} onChange2={setInput2} onChange3={setInput3}/>
      <Button text='Check' onPress={handlePress} color={randomRGB} textColor={textColor}/>
  </View>
  );
};

const styles = StyleSheet.create({
  gameScreenContainer: {
    height: "100%",
    flexDirection: "column",
    flexWrap: "wrap",
    paddingBottom: 100,
    alignItems: 'center',
  },
  explanationText: {
    fontSize: 16,
    margin: 12
  },
  taskField: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameScreen2;