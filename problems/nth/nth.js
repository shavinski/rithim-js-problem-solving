
function nth(items, idx) { 
  // Add any parameters you need. Good luck!
  let length = 0;

  if (idx < 0) {
    for (let i = items.length - 1; i >= 0; i--) { // i = 1
      length++;
      if (length === (idx * -1)) {             // 2 === 2
        return items[i];
      };
    };
  };

  return items[idx]
};

// BETTER SOLUTION (not mine)
// function nth(items, idx) {
//   if (idx < 0) {
//     idx = items.length + idx; 
//   }
//   return items[idx];
// }
