
function binarySearch(array, val) { 
  // Add any parameters you need. Good luck!
  let low = 0;
  let high = array.length;

while (low <= high) {

    let mid = Math.floor(low + (high - low)/2);  
    console.log('mid:', mid, 'low:', low, 'high:', high);
    console.log(array, 'mid', array[mid], 'val:', val);
    
    if(array[mid] === val) {
      return mid;
    } else if (array[mid] < val) {
      low = mid + 1;
    } else {
      high = mid - 1;
    };
  };

  return -1;

};
