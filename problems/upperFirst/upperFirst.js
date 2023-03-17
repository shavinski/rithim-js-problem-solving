
function upperFirst(string) { 
  // Add any parameters you need. Good luck!

  let captializeFirst = string.slice(0,1).toUpperCase()
  let restOfWord = string.slice(1, string.length);

  return captializeFirst.concat(restOfWord);
}
