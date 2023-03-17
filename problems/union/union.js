
function union(...arrs) { 
  // Add any parameters you need. Good luck!
  const result = [];
  const data = [...arrs];

  data.forEach(arr => {
    for (let num of arr) {
      if (!result.includes(num)) {
        result.push(num);
      } else {
        continue;
      };
    };
  });

  return result;
};
