// const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

const day = "Wednesday";

if (day === "Moday") {
  console.log("Today is first day of the week");
} else if (day === "Tuesday") {
  console.log("Today is 2nd day of the week");
} else if (day === "Wednesday") {
  console.log("Today is 3rd day of the week");
} else if (day === "Thursday") {
  console.log("Today is 4th day of the week");
} else if (day === "Friday") {
  console.log("Today is 5th day of the week");
} else {
  console.log("Today is weekend");
}

switch (day) {
  case "Moday":
    console.log("Today is first day of the week");
    break;

  case "Tuesday":
    console.log("Today is 2nd day of the week");
    break;

  case "Wednesday":
    console.log("Today is 3rd day of the week");
    break;

  case "Thursday":
    console.log("Today is 4th day of the week");
    break;

  case "Friday":
    console.log("Today is 5th day of the week");
    break;

  default:
    console.log("Today is weekend");
}

let age = 19;

// if (age >= 18) {
//   console.log('You are an adult')
// } else {
//   console.log('You are minor')
// }

console.log(age >= 18 ? "You are an adult" : "You are minor");

// bazuar ne numrin e pikeve. P.sh.
// 	- Nese studenti ka marr 91-100 pike ka noten A
// 	- 81-90 pike noten B
// 	- 71-80 pike noten C
// 	- 61-70 pike noten D
// 	- 50-60 pike noten E
// 	- <50 nuk kalon
// Le te perdoren: &&, <=, >=, <, >

const gradeStudent = (studentName, grade) => {
  let finalGrade = null;

  switch (true) {
    case grade >= 91:
      finalGrade = "A";
      break;

    case grade >= 81 && grade <= 90:
      finalGrade = "B";
      break;

    case grade >= 71 && grade <= 80:
      finalGrade = "C";
      break;

    case grade >= 61 && grade <= 70:
      finalGrade = "D";
      break;

    case grade >= 51 && grade <= 60:
      finalGrade = "E";
      break;
  }

  if (!finalGrade) {
    console.log(`${studentName} nuk keni kaluar provimin`);
  } else {
    console.log(`${studentName} jeni vlersuar me noten ${finalGrade}`);
  }
};

gradeStudent('Altin', 93)
gradeStudent('Fatos', 87)
gradeStudent('Abdullah', 44)
