
function rangeInArray(nums, beg, end) { 
  // Add any parameters you need. Good luck!

  let sum = 0;
  
  // if no nums are passed in it should return 0
  if (nums.length === 0) {
    return 0
  };

  // if no start param default to 0 
  if (beg === undefined) {
    beg = 0;
  };

  // if no end param then it should default to last value in arr or if end param is too large it should go through all of arr
  if(end === undefined || end > nums.length - 1) {
    end = nums.length - 1
  };

  for (let i = beg; i <= end; i++) {
    sum += nums[i];
  };

  return sum;
};
