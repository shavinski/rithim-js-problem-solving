
function zip(...arrs) { // [1,2] [3, 4] => [1,3] [2,4]
  // Add any parameters you need. Good luck!
  let storedArrs = [...arrs];
  let result = []

  for (let i = 0; i < storedArrs.length; i++) {
    result.push([storedArrs[i], storedArrs[i+1]]);
  };

  console.log(result);
  return result;
}
