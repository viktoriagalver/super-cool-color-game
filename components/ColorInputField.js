import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

function ColorInputField(props) {
  return(
    <View style={styles.inputContainer}>
      <Text style={styles.textStyle}>rgb(</Text>
      <TextInput 
      style={styles.textInput}
      value={props.input1}
      keyboardType="numeric"
      maxLength={3}
      onChangeText={props.onChange1}
      selectTextOnFocus={true}
        />
        <Text style={styles.textStyle}>)(</Text>
        <TextInput 
      style={styles.textInput}
      value={props.input2}
      keyboardType="numeric"
      maxLength={3}
      onChangeText={props.onChange2}
      selectTextOnFocus={true}
        />
        <Text style={styles.textStyle}>)(</Text>
        <TextInput 
      style={styles.textInput}
      value={props.input3}
      keyboardType="numeric"
      maxLength={3}
      onChangeText={props.onChange3}
      selectTextOnFocus={true}
        />
        <Text style={styles.textStyle}>)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: 200,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: '#fff',
    width: 50,
    height: 30,
    color: '#000',
    textAlign: 'center',
    fontSize: 24,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  textStyle: {
    fontSize: 24,
  },
});

export default ColorInputField;