function getToday() {
  // Add any parameters you need. Good luck!
  const today = new Date();
  return today;
};

function isWeekend(date) {
  // Add any parameters you need. Good luck!
  let thisDay = date.getDay()
  
  return (thisDay === 0 || thisDay === 6);
};

function getMonthName(date) {
  // Add any parameters you need. Good luck!
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const monthIndex = date.getMonth();

  return months[monthIndex];
};
