
function swap(items, firstIndex, secondIndex) { 
  // Add any parameters you need. Good luck!
  let placeHolder = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = placeHolder;

  return items;
};
