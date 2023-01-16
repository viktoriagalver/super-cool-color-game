import { Button, StyleSheet, View } from "react-native";

function GameButton(props) {
  return (
    <View>
      <View style={styles.buttonContainer}>
        <Button
          title={"Game 1"}
          style={styles.text1}
          onPress={props.onButton1Press}
          color="white"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={"Game 2"}
          style={styles.text2}
          onPress={props.onButton2Press}
          color="white"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#000",
    color: "#fff",
    marginVertical: 8,
    marginHorizontal: 16,
  },
  text1: {
    fontSize: 20,
    alignItems: "center",
    padding: 8,
  },
  text2: {
    fontSize: 20,
    alignItems: "center",
    padding: 8,
  },
});

export default GameButton;
