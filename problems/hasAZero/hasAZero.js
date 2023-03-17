
function hasAZero(num) { 
  // Add any parameters you need. Good luck!
  const numToArr = String(num).split('');

  return numToArr.some(num => num === '0');
};
