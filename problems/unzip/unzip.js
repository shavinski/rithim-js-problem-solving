
function unzip([[nRows], [nCol]]) { 
  // Add any parameters you need. Good luck!
  // console.log(nRows, nCol);
  const result = [];

  // if(nRows.length === 1) {
    
  // }

  for (let i = 0; i < nRows.length; i++) {
    // console.log(nRows[i], nCol[i]);
    result.push([nRows[i], nCol[i]]);
  };

  // console.log(result);
  return result;
};
