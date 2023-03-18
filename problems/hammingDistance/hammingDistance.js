
function hammingDistance(s1, s2) { 
  // Add any parameters you need. Good luck!
  let hamming = 0;

  if (s1.length !== s2.length) {
    return NaN;
  };

  for (let i = 0; i < s1.length; i++) {
    if (s1[i].toLowerCase() !== s2[i].toLowerCase()) {
      hamming += 1;
    };
  };

  return hamming; 
};

