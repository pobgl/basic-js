const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here

  if (!sampleActivity || typeof(sampleActivity) !== 'string') {
    return false;
  }

  const sampleNumber = parseFloat(sampleActivity);
    if (sampleNumber <= 0 || sampleNumber > MODERN_ACTIVITY || isNaN(sampleNumber)) {
  return false;
  } return Math.ceil(Math.log(MODERN_ACTIVITY / sampleNumber) /  0.693 * HALF_LIFE_PERIOD);
};
