
function validAnagram(w1, w2) { 
  // Add any parameters you need. Good luck!
  const w1Obj = {};
  const w2Obj = {};

  if (w1.length !== w2.length) {
    return false;
  } else if (!w1.length || !w2.length) {
    return true;
  };

  for (let i = 0; i < w1.length; i++) {
    if (!w1Obj.hasOwnProperty(w1[i]) || !w2Obj.hasOwnProperty(w2[i])) {
      w1Obj[w1[i]] = 1;
      w2Obj[w2[i]] = 1;
      console.log(w1[i], w2[i]);
    } else {
      w1Obj[w1[i]] += 1;
      w2Obj[w2[i]] += 1;
    };
  };

  for (let key in w1Obj) {
    if (w1Obj[key] !== w2Obj[key]) {
      return false;
    };

    return true;
  };

};
