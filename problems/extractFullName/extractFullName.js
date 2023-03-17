
function extractFullName(people) { 
  // Add any parameters you need. Good luck!
  const newArr = [];

  for (let obj of people) {
    let fullName = ''
    for (let key in obj) {
      if (key === 'first') {
        fullName += `${obj[key]}`;
      }

      if (key === 'last') {
        fullName += ` ${obj[key]}`;
      };
    };

    newArr.push(fullName)
  };

  return newArr;
};
