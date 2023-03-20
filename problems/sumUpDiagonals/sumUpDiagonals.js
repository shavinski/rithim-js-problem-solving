
function sumUpDiagonals(arrays) { 
  // Add any parameters you need. Good luck!
  let sum = 0;
  let index = 0;

  arrays.forEach(arr => {
    sum += arr[index];
    console.log(sum, arr[index]);
    index++;
  });
  
  if (index === arrays.length) {
    index = arrays.length - 1;

      arrays.forEach(arr => {
        sum += arr[index];
        index--;
    });
  }; 

  return sum;
};


// ANOTHER SOLUTION (NOT MINE)

// function sumUpDiagonals(arr) {
//   let sum = 0;

//   // sum up elements of the diagonal from upper left to lower right
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i][i];
//   }

//   // sum up elements of the diagonal from upper right to lower left
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i][arr.length - 1 - i];
//   }

//   return sum;
// }