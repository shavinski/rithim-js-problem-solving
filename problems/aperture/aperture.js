
// function aperture(n, items) { 
//   // Add any parameters you need. Good luck!
//   let result = [];

//   if (n > items.length || n < 1) {
//     return [];
//   }; 

//   let subArr = [];                            

//   for (let i = 0; i < items.length; i++) {     
//     if (subArr.length === n) {               
//       result.push(subArr);                
//       i--;                                      
//       subArr = [];                              
//     } else {
//       subArr.push(items[i]);                   
//     };
//   };

//   if (subArr.length === n) {
//     result.push(subArr);
//   };

//   return result;
// };


// NOT MY SOLUTION, COULDN'T SOLVE 
function aperture(n, items) {
  if (n < 1 || n > items.length) {
    return [];
  }
  
  const result = [];

  for (let i = 0; i <= items.length - n; i++) {
    result.push(items.slice(i, i + n));
  }

  return result;
}

