
function padEnd(phrase, minLength, extra) { 
  // Add any parameters you need. Good luck!
  let phraseToArr = phrase.split(' ');


  if (minLength <= phrase.length) {
    return phrase;
  };

  //turn phrase string into an array and then push any spaces unitl length equals minlength
  if (extra === undefined && phrase.length < minLength) {
    for (let i = phrase.length; i < minLength; i++) {
      phraseToArr.push(' ')
    };
  };

  if(extra !== undefined) {
    let extraWord = extra.split('');
    let pushWord = '';

    for (let i = 0; i < phrase.length; i++) {
      
      console.log(extraWord[i]);
      pushWord += extraWord[i];

    };

    console.log(pushWord);
    return phraseToArr.concat(pushWord);
  };

  // console.log(phraseToArr, phraseToArr.join(''));
  return phraseToArr.join('');
}
