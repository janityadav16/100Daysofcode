function studentdetail(name, age, city, qualify,marks){
    console.log("Student Name: "+ name)
    console.log("Student Age: "+ age)
    console.log("City: "+ city)
    console.log("Qualify: "+ qualify)
    console.log("(P): "+ marks [0])
    console.log("(C): "+ marks [1])
    console.log("(M): "+ marks[2])
}

const CITY="alwar"

//camel case for second letter in variable it is capital
let studentName ="janit"
var studentAge=18
var qualify=true
let marks=[55,44,66 ]
studentdetail(studentName, studentAge, CITY, qualify,marks)

 studentName ="nakul"
 studentAge =19
 qualify =true
 marks=[50,46,56]
 studentdetail(studentName, studentAge, CITY, qualify, marks)
 studentdetail("vandana", 44, CITY, false,[53,54,66])
 