
function createMatrix(numCols, numRows) {    // rows are copies of cols
  // Add any parameters you need. Good luck!
  const colArr = [];
  const rowArr = colArr;

  if (numCols === 0 && numRows === 0) {
    return [];
  };

  for (let i = 0; i < numCols; i++) {
    colArr.push(0);
  };

  if (numRows === 1) {
    return [colArr];
  } else {
    return [colArr, rowArr]
  };
};
