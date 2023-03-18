
function takeRight(items, n) { 
  // Add any parameters you need. Good luck!\
  const result = [];

  if (n === undefined) {
    result.push(items[items.length - 1])
    return result;
  } else if (n === 0) {
    return result;
  } else if (n > items.length) {
    return items;
  } else {
    for (let i = items.length - 1; i >= 0; i--) {
      if (result.length === n) {
        return result;
      } else {
        result.unshift(items[i]);
      };
    };
  };
};
