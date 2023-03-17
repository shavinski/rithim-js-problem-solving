
function sameFrequency(num1, num2) { 
  // Add any parameters you need. Good luck!
  const counter1 = {};
  const counter2 = {};


  // switch our nums into an array to loop through 
  let numToArr1 = Array.from(String(num1), Number)
  let numToArr2 = Array.from(String(num2), Number)
    // looping through the arrays we will add the nums to object which has the keys as the num and the values as amount of times
    for (let nums of numToArr1) {
      if (!counter1.hasOwnProperty(nums)) {
        counter1[nums] = 1;
      } else {
        counter1[nums] += 1;
      };
    };

    for (let nums of numToArr2) {
      if (!counter2.hasOwnProperty(nums)) {
        counter2[nums] = 1;
      } else {
        counter2[nums] += 1;
      };
    };


    for (let key in counter1) {
      console.log(counter1[key], counter2[key]);
      if(counter1[key] !== counter2[key]) {
        return false
      };
    };

  return true;

};
