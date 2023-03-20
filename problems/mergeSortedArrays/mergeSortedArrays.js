
// function mergeSortedArrays(a, b) { 
//   // Add any parameters you need. Good luck!
//   const result = [];           // [1,2]
//   let max = -Infinity;
//   let i = 0;
//   let x = 0;

//   if (a.length > b.length) {
//     max = a.length;
//   } else {
//     max = b.length;
//   };

//   console.log();

//   while (result.length !== (a.length) + (b.length)) {
//     if (a[i] > b[x]) {
//       result.push(b[x]);
//       x++;
//     } else {
//       result.push(a[i]);
//       i++;
//     };
//   };

//   console.log(result);
//   return result;
// };

// BROKEN BRAIN ON THIS ONE (NOT MY SOLUTION)

function mergeSortedArrays(a, b) {                         // [1,2,4], [3,7]
  const result = [];                                        // [1, 2, 3, 4, 7]
  let i = 0; // index for array a                           // 3
  let j = 0; // index for array b                           // 2

  for (let k = 0; k < a.length + b.length; k++) {        // k = 6, k < 5 => now exit
    if (i >= a.length) {
      result.push(b[j]);                                // 3 >= 3 
      j++;                                              // push b[1], 7
    } else if (j >= b.length) {                         // 2 >= 2
      result.push(a[i]);
      i++;
    } else if (a[i] < b[j]) {                           // a[2] < b[1] => 4 < 7
      result.push(a[i]);                                // push(a[2])
      i++;
    } else {
      result.push(b[j]);                                // push(b[0]), 3
      j++;
    };
  };

  return result;
};