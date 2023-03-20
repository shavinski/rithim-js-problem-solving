
function unzip(matrix) { 
  // Add any parameters you need. Good luck!
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  const result = [];

  for (let i = 0; i < numCols; i++) {
    const newRow = [];
    for (let j = 0; j < numRows; j++) {
      newRow.push(matrix[j][i]);
    };
    result.push(newRow);
  };

  return result;
};


//broke my brain 
