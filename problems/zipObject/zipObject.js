
function zipObject(keys, values) { 
  // Add any parameters you need. Good luck!
  const result = {};

  for (let i = 0; i < keys.length; i++) {
    result[keys[i]] = values[i];
  };

  console.log(result);
  return result;
}
