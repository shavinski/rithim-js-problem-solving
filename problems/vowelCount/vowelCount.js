
function vowelCount(phrase) { 
  // Add any parameters you need. Good luck!
  const vowels = {};
  const vowelCheck = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];

  for (let char of phrase) {
    if (vowelCheck.includes(char)) {
      if (!vowels.hasOwnProperty(char.toLowerCase())) {
        vowels[char.toLowerCase()] = 1; 
      } else {
        vowels[char.toLowerCase()] += 1; 
      }
    };
  };

  return vowels;
};
