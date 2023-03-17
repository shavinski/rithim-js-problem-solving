
function onlyEvenValues(nums) { 
  // Add any parameters you need. Good luck!
  let result = [];

  nums.forEach(num => {
    if (num % 2 === 0) {
      result.push(num);
    };
  });

  return result;
};
