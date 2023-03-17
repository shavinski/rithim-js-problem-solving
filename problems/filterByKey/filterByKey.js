
function filterByKey(array, keyName) { 
  // Add any parameters you need. Good luck!
  const newArr = [];
  const result = array.filter(obj => {
    if (obj.hasOwnProperty(keyName)) {
      newArr.push(obj);
    };
  });

  return newArr;
};

// or this 

// function filterByKey(array, keyName) { 
//   // Add any parameters you need. Good luck!
//  return array.filter(obj => obj.hasOwnProperty(keyName))
// };
