
function twoArrayDifference(arr1, arr2) { 
  // Add any parameters you need. Good luck!
  // return all values that are in arr 1 that arr 2 doest not have 

  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    if(!arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    };
  };

  console.log(result);
  return result;
};
