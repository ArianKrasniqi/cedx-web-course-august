const fruits = ['Apple', 'Banana', 'Orange', 'Strawberry']

for (let i = 0; i < fruits.length; i++) {
  // i -> index
  console.log('Inside for loop: ', fruits[i])
}

let i = 0
while(i < fruits.length) {
  console.log('Inside while loop: ', fruits[i])
  i++;
}

let j = 0
do {
  console.log('Inside do-while loop: ', fruits[j])
  j++;
} while(j < fruits.length)


const person = {
  "id": 1,
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}

const consoleName = (name) => {
  console.log(name)
}

const showError = () => {
  console.log("We didn't find name")
  console.log("Please add name property")
}

const showBla = () => {
  console.log('Bla')
}

const findNameAndCallConsole = (person, errorFn) => {
  if (person.name) {
    consoleName(person.name)
  } else {
    errorFn()
  }
}

findNameAndCallConsole(person, showError)

// const customMap = (callbackFn, array) => {
//   for(let i = 0; i < array.length; i++) {
//     callbackFn(array[i])
//   }
// }

// const functionForElInMap = (el) => {
//   return `<span style="color: red">${value}</span>`
// }

// customMap(functionForElInMap, fruits)