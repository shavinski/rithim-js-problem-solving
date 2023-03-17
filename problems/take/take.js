
function take(arr, count) { 
  // Add any parameters you need. Good luck!
  const result = [];

  if (count === undefined) {
    return [arr[0]];
  };

  if (count === 0) {
    return [];
  };

  if (count > arr.length) {
    return arr;
  }

  for (let i = 0; i < count; i++) {
    result.push(arr[i]);
  };

  return result;
}
