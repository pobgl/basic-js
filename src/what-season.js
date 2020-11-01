const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (typeof(date) == 'undefined') {
    return 'Unable to determine the time of year!'
  }

  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error();
  }    

  let month = date.getMonth();

  if (month < 2 || month == 11) {
    return 'winter' 
  } else if (month < 5) {
    return 'spring'
  } else if (month < 8) {
    return 'summer'     
  } else {
    return 'fall'
  }
};
