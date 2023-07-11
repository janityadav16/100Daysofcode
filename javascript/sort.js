 const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 4, 2, 3];

 numbers.sort((a, b) => a - b);

 console.log(numbers);


 function simpleSort(arr) {
     return arr.sort(function(a, b) {
       return a - b;
     });
  }


  
  
