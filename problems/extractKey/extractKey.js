
function extractKey(objs, keyName) { 
  // Add any parameters you need. Good luck!
  const arr = [];
  const result = objs.map((obj, index) => {
    for (let key in obj) {
      if (key === keyName) {
        arr.push(obj[key]);
      };
    };
  });

  return arr;
};
