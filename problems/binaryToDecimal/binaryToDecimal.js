
function binaryToDecimal(numString) { 
  // Add any parameters you need. Good luck!
  let binary = numString.split(''); // [1, 0, 0, 1]

  let decimal = 0;                          
  for(let i = 0; i < binary.length; i++) { 
      decimal = (decimal * 2) + Number(binary[i]); 
  }

  return decimal;
};


