
function addKeyAndValue(objs, key, val) { 
  // Add any parameters you need. Good luck!
  objs.forEach(obj => {
    obj[key] = val;
  });

  return objs;
};
