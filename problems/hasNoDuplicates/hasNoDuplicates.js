
function hasNoDuplicates(nums) {                                      
  // Add any parameters you need. Good luck!

  return nums.every((num, index) => {nums.indexOf(num) === index});   
};


// using a set 

// function hasNoDuplicates(nums) {                                      
//   // Add any parameters you need. Good luck!
//   const numsSet = new Set(nums);

//   return nums.length === numsSet.size;
// };
