
function takeRight(items, n) { 
  // Add any parameters you need. Good luck!\
  const result = [];

  // if (n === undefined) {
  //   let newArray = [items[items.length-1]];

  //   return newArray;
  // } else if (n > items.length) {
  //   return items;
  // } else if (n === 0) {
  //   return [];
  // } else {
    for (let i = items.length - 1; i > n; i--) {
      result.unshift(items[i]);
    };
    console.log(result);
    return result;
  // }


};
