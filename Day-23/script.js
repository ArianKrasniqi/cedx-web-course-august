// Comment in line 1
let sum = 20;
// sum = sum + 7;

// New Comment Added
// Shorthand
// sum += 7;
sum += 7;
// console.log(sum);

let number = 2;
let number2 = -2;
let number3 = 2.2;

let text = 'Something';
let text2 = "Something";
let text3 = `Something`;

let x; // undefined data type

let sentece = "This is Arian's phone";
let sentece2 = 'This is Altins "phone"';
let sentece3 = "This is Abdullah's phone, so please \"don't touch it\"";
let sentece4 = "Please use \\n to make a new line";
// console.log(typeof sentece4)

let smth = false;

let nr1;
// console.log(typeof nr1)
nr = 4;
// console.log(typeof nr1)
let nr2 = null;
// console.log(typeof nr2)
nr2 = 6;

let equal = (nr1 == nr2);
// console.log(typeof equal)
// console.log(equal)

let texxt = '';
// console.log(texxt == false)
const centerName = "cedX";
const nrOfStudentsF = 25;
const nrOfStudentsM = 25;
const centerNameSentence = 
  "Center name is: \n" + centerName + 
  "\nand number of students in it is: \n" + 
  nrOfStudentsF + ' females and ' + nrOfStudentsM + ' males.';

const centerNameLiterals = 
`Center name is: ${centerName}
and number of students in it is:
${nrOfStudentsF} females and ${nrOfStudentsM} males.`

console.log(centerNameLiterals)

let price = 10;
let tax = 0.17;
let productPrice = `Product price with tax is ${price * (1 + tax)} EUR.`
console.log(productPrice)


const name = 'Moseeee';
const age = 10;
const sentence = 'My cat ' + name + ' is ' + (age * 4 + 17) + ' years old in cat years.';
console.log(sentence)
