
function padEnd(phrase, minLength, extra) { 
  // Add any parameters you need. Good luck!
  let phraseToArr = phrase.split('');

  if (minLength <= phrase.length) {
    return phrase;
  };

  //turn phrase string into an array and then push any spaces unitl length equals minlength
  if (extra === undefined && phrase.length < minLength) {
    for (let i = phrase.length; i < minLength; i++) {
      phraseToArr.push(' ')
    };
  };

  let i = 0;
  while(phraseToArr.length !== minLength) {
    if(i >= extra.length) {
      i = 0;
    }

    phraseToArr.push(extra[i]);
    i++;
  };

  return phraseToArr.join('');
}
