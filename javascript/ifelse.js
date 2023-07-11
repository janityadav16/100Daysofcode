
let a=105
if(a>90 && a<100){
    console.log("A")
}else if(a>80 && a<90){
    console.log("B")
}
else if(a>70 && a<80){
    console.log("c")
}
else if(a>0 && a<70){
    console.log("D")
}
else{
    console.log("wrong marks")
}



 let x=90-100
 if(score=90-100){
     console.log(A)
 }
 let y=80-90
 if(score=80-90){
     console.log(B)
 }
  let z=70-80
 if(score=70-80){
     console.log(C)
 }
 let b=0-70
 if(score=0-70){
     console.log(D)
 }


 let temperature = 25;

if (temperature >= 30) {
  console.log("It's a hot day!");
} else if (temperature >= 20) {
  console.log("It's a pleasant day.");
} else {
  console.log("It's a cold day.");
}


let num = 7;

if (num % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}

function calculator(n, m, operation){
  if(operation==="+"){
      return n + m
  } else if(operation==="-"){
 return n - m
}else if(operation==="*"){
 return n * m
}else if(operation==="%"){
 return n % m
}
}