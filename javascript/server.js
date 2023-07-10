
// //for, while, do while
 

// //for
 for(let i=1; i<=50; i++){
     console.log(i)
 }

// //while
 let x =1;
 while(x<=50){
     console.log("while",x)
     x++;
  }

 //do while
 let y=1
 do{
     console.log("do-while",y)
     y++;
}while(y<=50)

function grade(A){
        let x=90-100;
        if(90-100){
            console.log(A)
        }

}
grade(78)


const marks = [78, 85, 92, 67, 88];
let totalMarks = 0;

for (let i = 0; i < marks.length; i++) {
  totalMarks += marks[i];
}

console.log("Total marks:", totalMarks);
