
function isPrime(num) { 
  // Add any parameters you need. Good luck!


  if (isNaN(num)) return false;
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }; 
  }; 

  return true;
};
