
function inRange(n, start, end) { 
  // Add any parameters you need. Good luck!
  const arr = [];

  // if end is und then we will start from 0 and then work up to the start num
  if (end === undefined) {
    end = start;
    start = 0;
  };

  // if end is greater than start then we will flip the values to be reversed 
  if (start > end) { // 100 -5
    let storeStart = start;
    let storeEnd = end;
    start = storeEnd;
    end = storeStart;
  };

  // create an array that contains the start and loops through until end number so that we can have an array that contains all numbers between
  for (let i = start; i < end; i++) {
    arr.push(i);
  };

  console.log(arr, arr.includes(Math.floor(n)), n);
  return arr.includes(Math.floor(n));
};
