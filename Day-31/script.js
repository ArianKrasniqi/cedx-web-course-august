const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

for (const day of days) {
  // console.log('day', day)
}

const person = {
  "id": 1,
  "name": "Leanne Graham",
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

for (const key in person) {
  // console.log(`${key} - ${person[key]}`);
}

const classes = [
  ['Fatosi', 'Ariani'],
  ['Abdullahi', 'Altini'],
  ['Doni', 'Egzoni']
]

// for(let i = 0; i < classes.length; i++) {
//   console.log(classes[i])
//   for (const student of classes[i]) {
//     console.log('student', student)
//   }
// }

// for(let i = 0; i < classes.length; i++) {
//   console.log(classes[i])
//   for(let j = 0; j < classes[i].length; j++) {
//     console.log(classes[i][j])
//   }
// }

function faktorieli(num){
  let result = 1
  for(let i = num ; i >= 1; i--){
    result = result * i
  }
  console.log(result)
}

faktorieli(4)

