
function keyCount(objs) { 
  // Add any parameters you need. Good luck!

  const newObj = {};

  for (let obj of objs) {
    for (let key in obj) {
      if (!newObj.hasOwnProperty(key)) {
        newObj[key] = 1;
      } else {
        newObj[key] += 1;
      };
    };
  };

  return newObj;
};
