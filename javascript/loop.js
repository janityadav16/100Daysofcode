
 
//  for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
  

//   const marks = [78, 85, 92, 67, 88];
// let totalMarks = 0;

// for (let i = 0; i < marks.length; i++) {
//   totalMarks += marks[i];
// }

// console.log("Total marks:", totalMarks);


// const numSemesters = 8; 
// let totalCredits = 0;
// let totalGradePoints = 0;

// for (let semester = 1; semester <= numSemesters; semester++) {
//   const semesterCredits = ((`Enter the credits for Semester ${semester}:`));
//   const semesterGrade = ((`Enter the GPA for Semester ${semester}:`));
  
//   totalCredits += semesterCredits;
//   totalGradePoints += semesterCredits * semesterGrade;
// }

// const cgpa = totalGradePoints / totalCredits;
// console.log("Your CGPA is: " + cgpa(2));


// const rows = 5;

// for (let i = 1; i <= rows; i++) {
//   let pattern = "";

//   for (let j = 1; j <= i; j++) {
//     pattern += "+";
//   }

//   console.log(pattern);
// }

// const rows = 5;

// for (let i = rows; i >= 1; i--) {
//   let pattern = "";

//   for (let j = 1; j <= i; j++) {
//     pattern += "+";
//   }

//   console.log(pattern);
// }

// const rows = 5

// for (let i = 1; i <= rows; i++) {
//   let pattern = " ".repeat(rows - i) + "*".repeat(2 * i - 1) + " ".repeat(rows - i);
//   console.log(pattern);
// }

const rows=8

for(let i=1; i<=rows; i++){
  let pattern= "" .repeat(rows - i) + "*".repeat(2 * i - 1) + " ".repeat(rows - i);
  console.log(pattern);
}

//  const rows=7

//  for (let i=1; i<=rows; i++){
//  let pattern = "";


//  for(let j=1; j<=i; j++ ){
//   pattern += "*";
//  }
//  console.log(pattern);
// }

// const rows = 5;

// for (let i = 1; i <= rows; i++) {
//   let pattern = "";

//   for (let j = 1; j <= i; j++) {
//     pattern += "*";
//   }

//   console.log(pattern);
// }

// const rows=7
// for (let i = rows; i >= 1; i--) {
//   let pattern = "";

//   for (let j = 1; j <= i; j++) {
//     pattern += "*";
//   }

//   console.log(pattern);
// }