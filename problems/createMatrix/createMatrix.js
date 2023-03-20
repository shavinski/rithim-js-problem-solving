
// function createMatrix(numCols, numRows) {    // rows are copies of cols
//   // Add any parameters you need. Good luck!
//   const colArr = [];
//   const rowArr = colArr;

//   if (numCols === 0 && numRows === 0) {
//     return [];
//   };

//   for (let i = 0; i < numCols; i++) {
//     colArr.push(0);
//   };

//   if (numRows === 1) {
//     return [colArr];
//   } else {
//     return [colArr, rowArr]
//   };
// };

// BETTER SOLUTION (not mine)

function createMatrix(numCols, numRows) {
  let matrix = [];
  for (let i = 0; i < numRows; i++) {
    let row = [];
    for (let j = 0; j < numCols; j++) {
      row.push(0);
    }
    matrix.push(row);
  }
  return matrix;
}