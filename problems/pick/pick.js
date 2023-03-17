
function pick(obj, keys) { // [a,c]
  //Add any parameters you need. Good luck!
  const result = {};

  //if a element in keys is not found as a key in obj ignore 
  // if it does exist then it will be put into result obj

  for (let key of keys) {
    if (obj.hasOwnProperty(key)) { 
      result[key] = obj[key];     
    };
  };
  
  return result;
};
