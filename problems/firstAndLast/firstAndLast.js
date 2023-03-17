
function firstAndLast(words) { 
  // Add any parameters you need. Good luck!
  let result = [];

  words.forEach(word => {
    result.push(word[0] + word[word.length-1]);
  });

  console.log(result);
  return result;
}
