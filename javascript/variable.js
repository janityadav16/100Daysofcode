const totalNumber=200

function studentdetail(name, age, city, qualify,marks){
    console.log("Student Name: "+ name)
    console.log("Student Age: "+ age)
    console.log("City: "+ city)
    console.log("Qualify: "+ qualify)
    console.log("marks: P("+ marks[0]+"), C("+ marks[1]+"), M("+ marks[2]+")")
    let percent=percentage(marks, totalNumber)
    console.log("percentage: "+ percent+ "%")
    console.log("Grade: "+ grade(percent))
}

 function percentage(marks, totalCredits){
  //marks obtained/totalCredits*100
  let obtainedMarks=marks[0]+ marks[1]+ marks[2]
  let percentage=(obtainedMarks*100)/totalCredits
  return percentage
 }
 function grade(percent){
   if(percent>=90){
    return "A+"
   }else if(percent>=80 && percent<=90){
      return "A"
  }else if(percent>=70 && percent<=80){
    return "B"
  }else{
     return "FAIL"
  }
 }
const CITY="alwar"


let studentName =["janit", "Nakul", "vandana"]
var studentAge=[18, 19, 44]
var qualify=[true, false, true]
let marks=[[55,44,66], [50,46,56], [53,54,66]]
for(i=0; i<3; i++){
    studentdetail(studentName[i], studentAge[i], CITY, qualify[i],marks[i])
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
    }else
        return "Invalid operator"
    
    return result
}

