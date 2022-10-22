// Global Variable
let center = 'education';

// function consoleName() {
//   // Local Variable
//   let center = 'cedX';
//   console.log('Inner: ', center);
// }

// Arrow Functions
const consoleName = () => {
  let center = 'cedX';
  console.log('Inner: ', center);
}

consoleName()

console.log('Outer: ', center);
