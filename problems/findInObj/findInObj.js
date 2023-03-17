
function findInObj(array, key, val) { 
  // Add any parameters you need. Good luck!
  const result = array.filter(obj => obj[key] === val);

  return result.length > 0 ? result[0] : undefined; 
};

