
function mergeSortedArrays(a, b) { 
  // Add any parameters you need. Good luck!
  const result = [];           // [1,2]

  for (let num of a) {
    result.push(num);
  };

  for (let i = 0; i < b.length; i++) {
    if (result[i] > b[i] && result[i+1] < b[i]) {
      console.log('nice');
      result.splice(1, 0, [b[i]]);
    };
  };

  console.log(result);
  return result;
};
