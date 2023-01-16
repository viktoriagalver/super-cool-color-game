import { Pressable, StyleSheet, Text, View } from "react-native";

function Button(props) {
  return(
    <Pressable onPress={props.onPress}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText} >{props.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'grey',
    marginBottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
    paddingTop: 10,
    width: 100,
  },
  buttonText: {
    color: '#fff',
    fontSize: '20px',
  }
});

export default Button;