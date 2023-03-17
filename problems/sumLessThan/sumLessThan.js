
function sumLessThan(nums, maxNum) { 
  // Add any parameters you need. Good luck!
let check = nums.every(num => num > 1);
let sum = 0;

  if (check) {
    return sum;
  } else {
    for (let num of nums) {
      if (sum >= maxNum) {
        return sum;
      } else {
        sum += num;
      };
    };
    return sum;
  };

};

