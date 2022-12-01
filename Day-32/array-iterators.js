const albums = [
  {
    "userId": 1,
    "id": 1,
    "title": "quidem molestiae enim"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "sunt qui excepturi placeat culpa"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "omnis laborum odio"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "non esse culpa molestiae omnis sed optio"
  },
  {
    "userId": 1,
    "id": 5,
    "title": "eaque aut omnis a"
  },
  {
    "userId": 1,
    "id": 6,
    "title": "natus impedit quibusdam illo est"
  },
  {
    "userId": 1,
    "id": 7,
    "title": "quibusdam autem aliquid et et quia"
  },
  {
    "userId": 1,
    "id": 8,
    "title": "qui fuga est a eum"
  },
  {
    "userId": 1,
    "id": 9,
    "title": "saepe unde necessitatibus rem"
  },
  {
    "userId": 1,
    "id": 10,
    "title": "distinctio laborum qui"
  },
]

const fruits = ['Apple', 'Banana', 'Orange', 'Strawberry']

fruits.forEach((value, index) => {
  console.log(`${value} in index: ${index}`)
})

const prices = [0.5, 2, 4.5, 9]
const tax = 17
const pricesWithTax = []

prices.forEach((price) => {
  const newPrice = price + (price * tax / 100)
  pricesWithTax.push(+newPrice.toFixed(2))
})

const pricesHtml = pricesWithTax.map((value) => {
  return `<span style="color: red">${value}</span>`
})

console.log(pricesHtml)

const fruitsWithIndex = fruits.map((fruit, index) => {
  return `${fruit} - ${index}`
})
// Shorthand
// const fruitsWithIndex = fruits.map((fruit, index) => `${fruit} - ${index}`)

console.log(fruitsWithIndex)

const foundedAlbum = albums.find((album) => {
  return album.title === 'omnis laborum odio'
})

console.log(foundedAlbum)

const foundedAlbumIndex = albums.findIndex((album) => {
  return album.title === 'omnis laborum odio'
})

console.log(foundedAlbumIndex)

albums.splice(foundedAlbumIndex, 1)

console.log(albums)

const students = [
  { 
    name: 'Fatos',
    lastname: 'Duda',
    city: 'Peje',
    role: 'Student'
  },
  { 
    name: 'Arian',
    lastname: 'Krasniqi',
    city: 'Peje',
    role: 'Teacher'
  },
  { 
    name: 'Altin',
    lastname: 'Bujupi',
    city: 'Peje',
    role: 'Student'
  },
  { 
    name: 'Donart',
    lastname: 'Sheqerolli',
    city: 'Peje',
    role: 'Teacher'
  },
  { 
    name: 'Abdullah',
    lastname: 'Kabashi',
    city: 'Peje',
    role: 'Student'
  },
]

const teachers = students.filter((student, index) => {
  return student.role === 'Teacher'
})

console.log(teachers)
