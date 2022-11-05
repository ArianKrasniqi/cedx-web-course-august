const fruits = ['Apple', 'Orange', 'Strawberry', 'Mango', 'Grapes'];

let myFavouriteFruits = 'My favourite fruits are: '
// My favourite fruits are: Apple, Orange, Strawberry, Mango, Grapes.

// myFavouriteFruits += fruits[0] + ', '
// console.log(myFavouriteFruits)

// myFavouriteFruits += fruits[1] + ', '
// console.log(myFavouriteFruits)
// myFavouriteFruits += fruits[2] + ', '
// console.log(myFavouriteFruits)
// myFavouriteFruits += fruits[3] + ', '
// console.log(myFavouriteFruits)
// myFavouriteFruits += fruits[4] + '. '
// console.log(myFavouriteFruits)

// Indeksi i fundit osht fruits.length - 1
// Nese indeksi qe e kena osht i barabarte me fruits.length - 1, i bjen qe o i fundit

// for (let i = 0; i < fruits.length; i++) {
//   if (i === fruits.length - 1) {
//     myFavouriteFruits += fruits[i] + '.'
//   } else {
//     myFavouriteFruits += fruits[i] + ', '
//   }
// }

for (let i = 0; i < fruits.length; i++) {
  if (i < fruits.length - 1) {
    myFavouriteFruits += fruits[i] + ', '
  } else {
    myFavouriteFruits += fruits[i] + '.'
  }
}

console.log(myFavouriteFruits)