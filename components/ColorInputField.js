import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

function ColorInputField() {
  const [number, onChangeNumber] = React.useState(null);
  return(
    <View style={styles.inputContainer}>
      <Text style={styles.textStyle}>rgb(</Text>
      <TextInput 
      style={styles.textInput}
      value={number}
      keyboardType="numeric"
      maxLength={3}
        />
        <Text style={styles.textStyle}>)(</Text>
        <TextInput 
      style={styles.textInput}
      value={number}
      keyboardType="numeric"
      maxLength={3}
        />
        <Text style={styles.textStyle}>)(</Text>
        <TextInput 
      style={styles.textInput}
      value={number}
      keyboardType="numeric"
      maxLength={3}
        />
        <Text style={styles.textStyle}>)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: 400,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: '#000',
    width: 50,
    height: 30,
    color: '#fff',
    textAlign: 'center',
    fontSize: 24,
  },
  textStyle: {
    fontSize: 24,
  },
});

export default ColorInputField;