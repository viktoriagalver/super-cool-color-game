import { StyleSheet, Text, View } from "react-native";
import ColorFieldButton from "../components/ColorFieldButton";
import ColorInputField from "../components/ColorInputField";
import Button from "../components/Button";
import React from "react";

function GameScreen2(props) {

  //get rgb color as string
  const randomRGB = `rgb(${props.color.r},${props.color.g},${props.color.b})`;

  const [input1, setInput1] = React.useState('');
  const [input2, setInput2] = React.useState('');
  const [input3, setInput3] = React.useState('');

  // get User Input as rgb String
  const userInput = `rgb(${input1},${input2},${input3})`;

  // check if user input is right or wrong 
  const handlePress = () => {
    console.log(userInput);
    if(userInput === randomRGB) {
      console.log("WIN!!!")
    } else {
      console.log("LOOSE!!!")
    }
  }

  console.log(randomRGB);

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
      <Button text='Check' onPress={handlePress}/>
  </View>
  );
};

export const styles = StyleSheet.create({
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