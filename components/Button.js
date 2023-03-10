import { Pressable, Text, View } from "react-native";

function Button(props) {
  return(
    <Pressable onPress={props.onPress}>
      <View style={{
        backgroundColor: props.color,
        marginBottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
        paddingTop: 10,
        width: 100,}}>
      <Text style={{
        color: props.textColor,
        fontSize: 20,}}>
          {props.text}</Text>
      </View>
    </Pressable>
  );
};

export default Button;