// function returns a random color object with r,g and b values between 0 and 255
export function getRandomColor() {
  // Generate random color gradients between 0 and max 256 (excluding 256)
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return {
    r: red,
    g: green,
    b: blue,
  };
}

export default getRandomColor