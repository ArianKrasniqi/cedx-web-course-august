const a = 0;
const b = 6;
const c = 8
const text = 'Peje'
const age = 0

// 0 - 9 | 10 - 12 | 13+

const yearsOfStuding = 'A'

console.log(a == b) // true
console.log(a != b) // false
console.log(a != c) // true

console.log('a', Boolean(a))
console.log('text', Boolean(text))

console.log("'4' == 4", '4' == 4)
console.log("'4' === 4", '4' === 4)

console.log('0 == false', 0 == false)
console.log('0 === false', 0 === false)

console.log('0 != false', 0 != false)
console.log('0 !== false', 0 !== false)

if (age > 18) {
  console.log('You are an adult')
}

if (age) {
  console.log('You have age described')
}

if (!text) {
  console.log('Text has a value')
}

if (text && age) {
  console.log('We have age and text')
}

if (text || age) {
  console.log('We have age or text')
}

if (age >= 18) {
  console.log('You are an adult')
} else {
  console.log('You are a minor person')
}

if (yearsOfStuding <= 9) {
  console.log('You are in Primary School')
} 

if (yearsOfStuding >= 10 && yearsOfStuding <= 12) {
  console.log('You are in secondary school')
}

if (yearsOfStuding >= 13) {
  console.log('You are in high school')
}

if (yearsOfStuding === 0) {
  console.log("You didn't even started")
} else if (yearsOfStuding > 0 && yearsOfStuding <= 9) {
  console.log('You are in Primary School')
} else if (yearsOfStuding >= 10 && yearsOfStuding <= 12) {
  console.log('You are in secondary school')
} else if(yearsOfStuding >= 13) {
  console.log('You are in high school')
} else {
  console.log('Wrong input')
}

// Shkruani nje funksion i cili pranon nje numer dhe shtyp nje fjali qe tregon nese numri eshte çift apo tek.
//  Gjithashtu funksioni shtyp nese numri eshte 0.
// 	Numri 2 eshte cift.
// 	Numri 3 eshte tek.
// 	Ky eshte numri zero.

function oddOrEven(number) {
  if (number === 0) {
    console.log('Ky eshte numri zero.')
  } else if (number % 2 === 1) {
    console.log(`Numri ${number} eshte tek.`)
  } else {
    console.log(`Numri ${number} eshte cift.`)
  }
}

oddOrEven(0)
oddOrEven(19)
oddOrEven(28)
