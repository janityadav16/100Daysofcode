
 
 for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
  

  const marks = [78, 85, 92, 67, 88];
let totalMarks = 0;

for (let i = 0; i < marks.length; i++) {
  totalMarks += marks[i];
}

console.log("Total marks:", totalMarks);
