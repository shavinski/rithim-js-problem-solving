
function omit(obj, keys) { 
  // Add any parameters you need. Good luck!
  const result = {};

  // if keys array contains obj keys dont include them 
  for (let key in obj) {
    if(keys.includes(key)) {
      continue;
    } else {
      result[key] = obj[key];
    };
  };

  console.log(result);
  return result;
};
