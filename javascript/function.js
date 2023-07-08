
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
  







