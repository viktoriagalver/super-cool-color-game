import { useWindowDimensions, Pressable } from "react-native";

// compoonent receives color as prop "color"
function ColorFieldButton(props) {
  const { width } = useWindowDimensions(); //window width

  return (
    <Pressable
      onPress={props.handlePress}
      style={{
        backgroundColor: props.color,
        width: width / 2,
        height: width / 2,
      }}
    />
  );
}

export default ColorFieldButton;
