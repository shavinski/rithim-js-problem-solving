
function linearSearch(items, sought) { 
  // Add any parameters you need. Good luck!
  if (!items.includes(sought)) {
    return -1;
  };

  for (let i = 0; i < items.length; i++) {
    if (items[i] === sought) {
      return i;
    };
  };

};
