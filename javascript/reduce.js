//const numbers = [1, 2, 3, 4, 5];

//const sum = numbers.reduce((accumulator, currentValue) => {
  //return accumulator + currentValue;
//});

//console.log(sum);





//function Reduce(arr, callback, initialValue) {
  //  var accumulator = initialValue;
  
    //for (var i = 0; i < arr.length; i++) {
      //accumulator = callback(accumulator, arr[i]);
    //}
  
    //return accumulator;
  //}
  

  var array = [1, 2, 3, 4, 5];
  
  var sum = Reduce(array, function(accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
  
  console.log(sum);