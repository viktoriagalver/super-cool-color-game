import { StyleSheet, Text, View } from "react-native";

function Button() {
  return(
    <View style={styles.buttonContainer}>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#000',
    color: '#fff',
  },
});

export default Button;