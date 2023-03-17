
function reverseVowels(word) { 
  // Add any parameters you need. Good luck!
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let arr = word.split('');  // [A, w, e, s, o, m, e]
  let left = 0;
  let right = arr.length - 1;

  console.log(arr);
  while(left < right) {
    if (vowels.includes(arr[left])) {                                         // does vowels include arr[2] = e, true
      console.log(vowels.includes(arr[left]), arr[left]);
      if (!vowels.includes(arr[right])) {                                   // does vowels not include arr[5] = m, true 
        console.log(!vowels.includes(arr[right]), arr[right]);                             // skip
        right--;
      } else {
        const temp = arr[left];             // temp = arr[0] = A
        arr[left] = arr[right];             // arr[0] now equals arr[6] = e, arr [0] = e
        arr[right] = temp;                  // arr[6] = arr[0] = A
        left++;                             // left = 2
        right--                             // right = 5
        
        console.log(arr);
      };
    } else {
      left++                                // left = 2
    };
  };

  return arr.join('')
};
