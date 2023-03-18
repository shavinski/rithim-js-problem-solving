
function nth(items, idx) { 
  // Add any parameters you need. Good luck!
  let length = 0;

  if (idx < 0) {
    for (let i = items.length - 1; i >= 0; i--) { // i = 4 
      length++;
      if (length === (idx * -1)) {             // 0 =
        return items[i];
      };
    };
  };

  return items[idx]
};
