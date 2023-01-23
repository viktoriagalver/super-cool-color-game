// converts color object to rgb string
function colorObjectToString(color) {
  const colorString = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
  return colorString;
}

export default colorObjectToString