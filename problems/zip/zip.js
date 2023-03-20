
function zip(...arrs) { // [1,2] [3, 4] => [1,3] [2,4]
  // Add any parameters you need. Good luck!
  let storedArrs = [...arrs];
  let result = [];
  let maxLength = -Infinity

  storedArrs.forEach(arr => {
    if (arr.length > maxLength) {
      maxLength = arr.length;
    };
  });

  for (let i = 0; i < maxLength; i++) {
    let subArr = [];
    for (let x = 0; x < storedArrs.length; x++) {
      subArr.push(storedArrs[x][i])
    };
    result.push(subArr);
  };

  console.log(result);
  return result;
};
