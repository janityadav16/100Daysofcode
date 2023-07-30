
// // // //for, while, do while
 

// // // //for
// // // for(let i=1; i<=50; i++){
// // //     console.log(i)
// // // }

// // // //while
// // // let x =1;
// // // while(x<=50){
// // //     console.log("while",x)
// // //     x++;
// // // }

// // // //do while
// // // let y=1
// // // do{
// // //     console.log("do-while",y)
// // //     y++;
// // // }while(y<=50)

// // function grade(A){
// //         let x=90-100;
// //         if(90-100){
// //             console.log(A)
// //         }

// // }
// // grade(78)

// // const number=[1,2,3,4,5];
// // let sum=0
// // for(let i=0; i<number.length; i++){
// //     sum+=number[i]
// // }
// // console.log("the sum of the number is:", sum)

// // const array=[10,20,30,40,50];
// // const searchvalue=60
// // let found=true;
// // for(let i=0; i<array.length; i++){
// //     if(array[i]===searchvalue){
// //         found=true;
// //         break;
// //     }else if(array[i]!==searchvalue){
// //         found=false;
// //         break;
// //     }
// // }

// // console.log("the element is:", found ? "found:": "not found","in the array")

// // const numbersArray = [10, 20, 25, 30, 40];
// // const removeValue = 25;

// // for (let i = 0; i < numbersArray.length; i++) {
// //   if (numbersArray[i] === removeValue) {
// //     numbersArray.splice(i, 3);
// //     break;
// //   }
// // }

// // console.log("The updated array is:", numbersArray);
// // const array = [1,2,3,4,5];
// // for(let i=0; i < array.length; i++){
// //     console.log(array[i]);
// // }

// // const number=[4,9,3,5,7];
// // let maxnumber=number[0];

// // for(let i=0; i<number.length; i++){
// //     if(number[i]>maxnumber){
// //         maxnumber==number[1]
// //     }
// // }
// // console.log("the maximum number in the array is:", maxnumber)

// const array = [1,2,3,4,5];
// for(let i=0; i < Math.floor(array.length/2); i++){
//     const temp = array[i];
//     array[i] = array[array.length-1-i];
//     array[array.length-1-i] = temp;
// }
// console.log("The reverse of the array will be",array);
// const word = "racer";
// let ispalindrome = true;
// for(let i=0; i < Math.floor(word.length/2); i++){
//     if( word[i]!== word[word.length-1-i]){
//         ispalindrome = false;
//     }
// }
// console.log("The word:", ispalindrome? "is palindrome":"is not palindrome");
// const arrays = [2,4,6,8,10];
// let sum =0;
// for(let i=0; i < arrays.length; i++){
//     sum += arrays[i];
// }
// const average =  sum/arrays.length;
// console.log("the average of the arrays:",average);
// const array1 = [1,6,9];
// const array2 = [4,8,9];
// const matrix = [
//   [2,3],
//   [2,9],
//   ]

  
// function transposeArray(matrix) {
// const numRows = matrix.length;
// const numCols = matrix[0].length;
// const transposedMatrix = [];
  
//    for (let j = 0; j < numCols; j++) {
//     transposedMatrix[j] = [];
  
//       for (let i = 0; i < numRows; i++) {
//                 transposedMatrix[j][i] = matrix[i][j];
//      }
//    }
  
//    return transposedMatrix;
//   }
  
//   console.log(transposeArray(matrix));

// const primeNumber = 17;
// let isPrime = true;

// if (primeNumber < 2) {
//   isPrime = false;
// } else {
//   for (let i = 2; i <= Math.sqrt(primeNumber); i++) {
//     if (primeNumber % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
// }

// console.log("The number is", isPrime ? "prime." : "not prime.");