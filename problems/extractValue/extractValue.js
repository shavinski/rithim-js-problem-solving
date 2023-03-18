
function extractValue(objs, keyName) { 
  // Add any parameters you need. Good luck!
  let arr = [];
  const result = objs.filter(obj => {

    for (let key in obj) {
      if (key === keyName) {
        arr.push(obj[key]);
      };
    };
    return arr;
  });
  return arr;
};

// function extractValue (objs, keyName) {
//   let arr = [];

//   for (let obj of objs) {
//     for (let key in obj) {
//       if (key === keyName) {
//         arr.push(obj[key]);
//       };
//     };
//   };

//   return arr;
// };