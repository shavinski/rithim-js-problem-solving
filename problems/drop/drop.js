
function drop(items, numDrop) { 
  // Add any parameters you need. Good luck!
  // if numDrop is greater than items length retrun empty arr
  const result = [];

  if (numDrop > items.length) {
    return [];
  };

  // if numDrop is not provided return copy without first item 
  if (numDrop === undefined) {

    for (let i = 1; i < items.length; i++) {
      result.push(items[i]);
    };

    return result;
  };

  for (let i = numDrop; i < items.length; i++) {
    result.push(items[i]);
  };
  
  return result;
};
