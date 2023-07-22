  
//  let x =[ 23,"fsyuuas",true,43]

//  for(let i = 0; i <= 3; i++){
//  console.log(x[i])
//  }

//  console.log(x.length)


//  function x(z) {
//     return z * 5
// }
//  console.log("----->>>",z)


//  sum(3,x)

//  let multiply3 = val =>{
//      return val*3
// }
// (val => {
//      console.log("sgdjsdg") 
//     })()


//     const fruits = ["apple", "banana", "orange", "grape", "mango"];
// console.log(fruits);


// const myArray = [1, 2, 3, 4, 5];

// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

// const myArray = [1, 2, 3, 4, 5];

// myArray.forEach((element) => {
//   console.log(element);
// });


 //const number = [3,4,7,6,1,2,4,9,8,4,0]
// const sortedarray1=number.sort()
// console.log(sortedarray1)

// const reversedArray = numbers.reverse();
// console.log(reversedArray);

// const sortedArray2 = numbers.sort((a, b) => a - b);
// console.log(sortedArray2);

// function bubbleSort(arr) {
//     const length = arr.length;
//     for (let i = 0; i < length - 1; i++) {
//       for (let j = 0; j < length - 1 - i; j++) {
//         if (arr[j] > arr[j + 1]) {
//           [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         }
//       }
//     }
//     return arr;
//   }
  
//   const sortedArray1 = bubbleSort(numbers);
//   console.log(sortedArray1);


// const number = [5,4,6,2,7,3,9,1,0]
// function selectionSort(arr) {
//     const length = arr.length;
//     for (let i = 0; i < length - 1; i++) {
//       let minIndex = i;
//       for (let j = i + 1; j < length; j++) {
//         if (arr[j] < arr[minIndex]) {
//           minIndex = j;
//         }
//       }
//       if (minIndex !== i) {
//         [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//       }
//     }
//     return arr;
//   }
  
//   const sortedArray2 = selectionSort(numbers);
//   console.log(sortedArray2);

// const rows = [5,4,6,2,7,3,9,1,0]
// for (let i = 1; i <= rows; i++) {
//     let pattern = " ".repeat(rows - i) + "*".repeat(2 * i - 1) + " ".repeat(rows - i);
//     console.log(pattern);
//   }

  const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log("The sum of the array is:", sum);