const totalNumber = 200;
const CITY = "alwar";

const studentdetail = (name, age, city, qualify, marks) => {
  console.log(`Student Name: ${name}`);
  console.log(`Student Age: ${age}`);
  console.log(`City: ${city}`);
  console.log(`Qualify: ${qualify}`);
  console.log(`Marks: P(${marks[0]}), C(${marks[1]}), M(${marks[2]})`);

  let percent = percentage(marks, totalNumber);
  console.log(`Percentage: ${percent}%`);
  console.log(`Grade: ${grade(percent)}`);
};

const percentage = (marks, totalCredits) => {
  let obtainedMarks = marks[0] + marks[1] + marks[2];
  let percentage = (obtainedMarks * 100) / totalCredits;
  return percentage;
};

const grade = (percent) => {
  if (percent >= 90) {
    return "A+";
  } else if (percent >= 80 && percent <= 90) {
    return "A";
  } else if (percent >= 70 && percent <= 80) {
    return "B";
  } else {
    return "FAIL";
  }
};

const studentName = ["janit", "Nakul", "vandana"];
const studentAge = [18, 19, 44];
const qualify = [true, false, true];
const marks = [
  [55, 44, 66],
  [50, 46, 56],
  [53, 54, 66],
];

for (let i = 0; i < 3; i++) {
  studentdetail(studentName[i], studentAge[i], CITY, qualify[i], marks[i]);
}



function calculator(n, m, operation){
    if (operator == '+'){
        result = n + m
    }else if (operator == '-'){
        result = n - m
    }else if (operator == '*')
        result = n * m
    else if (operator == '/'){
        result = n / m
    }else{
        return "Invalid operator"
    }
    return result
}

