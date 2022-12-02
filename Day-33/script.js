const getInitials = (name) => {
  return name
    .split(" ")
    .map((el) => el[0])
    .join("");
};

// console.log(getInitials('Ronaldo de Assist Moreira'))

const numbers = [101, 432, 841, 395, 74];

const sum = numbers.reduce((previousValue, currentValue) => {
  const newValue = previousValue + currentValue;
  return newValue;
}, 0);

const users = [
  {
    name: "Fatos",
    country: "Kosova",
  },
  {
    name: "Doni",
    country: "UK",
  },
  {
    name: "Ariani",
    country: "US",
  },
  {
    name: "Abdullah",
    country: "Germany",
  },
  {
    name: "Altin",
    country: "US",
  },
  {
    name: "Egzoni",
    country: "Germany",
  },
];

// {
//   US: 2,
//   Germany: 2,
//   Kosova: 1,
//   UK: 1
// }

const countriesStats = users.reduce((acc, currVal) => {
  if (!acc[currVal.country]) {
    acc[currVal.country] = 1;
  } else {
    acc[currVal.country] += 1;
  }

  return acc;
}, {});

// console.log(countriesStats)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());

const arr = [1, 10, 17, 4, 7];
const sortedNumbers = arr.sort((a, b) => {
  return a - b;
});

const tasks = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
  {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false,
  },
  {
    userId: 1,
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true,
  },
  {
    userId: 1,
    id: 9,
    title: "molestiae perspiciatis ipsa",
    completed: false,
  },
  {
    userId: 1,
    id: 10,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true,
  },
];

// const stucturedTasks = tasks.reduce((acc, currentValue) => {
//   if (!acc[currentValue.completed]) {
//     acc[currentValue.completed] = [currentValue]
//   } else {
//     acc[currentValue.completed].push(currentValue)
//   }

//   return acc
// }, {})

const stucturedTasks = tasks.reduce(
  (acc, currentValue) => {
    if (currentValue.completed) {
      acc.completed.push(currentValue);
    } else {
      acc.uncompleted.push(currentValue);
    }
    return acc;
  },
  {
    completed: [],
    uncompleted: [],
  }
);

console.log(stucturedTasks);
