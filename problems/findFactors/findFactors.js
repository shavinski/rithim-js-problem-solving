
function findFactors(num) { 
  // Add any parameters you need. Good luck!
  const factors = [];

  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    };
  };

  console.log(factors);
  return factors;
};
