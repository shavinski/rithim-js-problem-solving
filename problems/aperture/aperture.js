
function aperture(n, items) { 
  // Add any parameters you need. Good luck!
  let result = [];

  if (n > items.length || n < items.length) {
    return [];
  }; 

  let index = 0;
  let subArr = [];

  while(index < items.length - 1) {  // 0 < 4 true
    console.log('working');          // 
    if (subArr.length < n) {
      subArr.push(items[index]);
      break;
    } else if (subArr.length === n) {
      result.push(subArr);
      subArr = [];
    };
  };

  console.log(result);
  return result;
};
