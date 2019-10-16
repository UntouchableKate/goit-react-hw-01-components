// function generateColor() {
//     return '#' + Math.floor(Math.random()*16777215).toString(16)
// };

const randomHsl = () => {
  const color = `hsla(${Math.random() * 360}, 100%, 50%, 1)`;
  return color;
};

export default randomHsl;
