const password = "      ariani123      "
const newPassword = password.trim()
console.log(password)
console.log(newPassword)

const center = "cedx"
const activity = "course"
const sentence = center.concat(' - ', activity)
console.log(sentence)

const thirdLetter = center.charAt(2)
console.log(thirdLetter)

const fourthLetter = activity[3];
console.log(fourthLetter)

// function sumValues(num1, num2) {
//   const result = num1 + num2;
//   alert(result)
// }

// sumValues(3, 7)
// sumValues(5, 13)

function sumValues(num1, num2) {
  const result = num1 + num2;
  return result;
  // console.log('Blaaa') -> Doesn't reach
}

const sum1 = sumValues(3, 7)
const sum2 = sumValues(5, 13)

console.log(sum1)
console.log(sum2)


function withTax(price) {
  return (price * 1.17).toFixed(2);
}

const milk = 2.5;
const cheese = 4.5;

// const milkWithTax = withTax(milk)
// const cheeseWithTax = withTax(cheese)

const sentence1 = `Base product price is ${milk}, but including taxes will be ${withTax(milk)}`
const sentence2 = `Base product price is ${cheese}, but including taxes will be ${withTax(cheese)}`

console.log(sentence1)
console.log(sentence2)

// function showMessage() {
//   alert('This is general message.')
// }

// showMessage()

function showMessage(message) {
  alert(message)
}

// showMessage('This is something')
// showMessage('This is something else')

function consoleMessage(message) {
  console.log(message)
}

consoleMessage('Consoling first')
consoleMessage('Consoling second')
