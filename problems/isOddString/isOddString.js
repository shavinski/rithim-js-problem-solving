
function isOddString(string) { 
  // Add any parameters you need. Good luck!
  for (let char of string) {
    console.log(char.charCodeAt(0));
    if (char.charCodeAt(0) % 2 === 0) {
      return false;
    };
  };

  return true;
};
