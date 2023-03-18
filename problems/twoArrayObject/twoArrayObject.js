
function twoArrayObject(keys, values) { 
  // Add any parameters you need. Good luck!
  let obj = {};
  
  for (let i = 0; i < keys.length; i++) {
    if (values[i] === undefined) {
      obj[keys[i]] = null;
    } else {
      obj[keys[i]] = values[i];
    };
  };

  return obj;
};
