
function calculatePercentage(subject1, subject2, subject3, subject4, subject5) {
    const totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
    const totalSubjects = 5;
    const percentage = (totalMarks / (totalSubjects * 100)) * 100;
  
    return percentage;
  }

  const subject1Marks = 80;
  const subject2Marks = 90;
  const subject3Marks = 85;
  const subject4Marks = 75;
  const subject5Marks = 95;
  
  const result = calculatePercentage(
    subject1Marks,
    subject2Marks,
    subject3Marks,
    subject4Marks,
    subject5Marks
  );
  
  console.log("Total Percentage: " + result + "%");



  function add(a,b){
    return a+b
}

add(4,5)


function calculateGrade(score) {
    if (score >= 90) {
      return 'A';
    } else if (score >= 80) {
      return 'B';
    } else if (score >= 70) {
      return 'C';
    } else if (score >= 60) {
      return 'D';
    } else {
      return 'F';
    }
  }
  console.log(calculateGrade(55))
  







