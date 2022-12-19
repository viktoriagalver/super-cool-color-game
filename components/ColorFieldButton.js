import { View, useWindowDimensions } from "react-native";

// compoonent receives color as prop "color"
function ColorFieldButton({ color }) {
  const { width } = useWindowDimensions(); //window width
  
  return (
    <View
      style={{
        backgroundColor: color,
        width: width / 2,
        height: width / 2
      }}
    />
  );
}

export default ColorFieldButton;
