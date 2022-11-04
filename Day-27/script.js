// const persons = new Array('Fatosi', 'Altini', 'Abdullahi')
const persons = ['Fatosi', 'Altini', 'Abdullahi', 'Ariani']
// console.log(persons[persons.length - 1])
// console.log(persons.at(-2))
persons[1] = 'Bujupi'
persons[4] = 'Doni'
// persons[7] = 'Egi' // Creates empty places

// persons[persons.length] = 'Egzoni'
const pushResult = persons.push('Egzoni')
// console.log(pushResult)

const removedFirst = persons.pop()
// console.log(removedFirst)
const removedSecond = persons.pop()
// console.log(removedSecond)

persons.unshift('Egzoni')

const removedPerson = persons.shift()
// console.log(removedPerson)

persons.push('Person1', 'Person2')

console.log(persons)

// console.log(Array.isArray(persons))
// console.log(persons instanceof Array)

const classes = [['Arian', 'Fatosi'], ['Altini', 'Abdullahin'], ['Egzoni', 'Doni']]
console.log(classes[1][1])

const person = {
  name: 'Fatos',
  lastname: 'Duda',
  age: 25,
  city: 'Peje',
  'place of birth': 'Peje'
}

person.profession = 'Programmer'

person['lastname'] = 'Dudaaa'
person['place of birth'] = 'Prishtine'

let pob = 'place of birth' // Very Important Case
person[pob] = 'Mitrovice'

delete person.age

const key = 'city'

// person.key = 'Prizen' // Don't use this way
person[key] = 'Gjilan' // Use this one instead
console.log(person)
