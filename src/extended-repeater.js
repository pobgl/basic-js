const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  
  let {additionSeparator = '|', addition = '', separator = '+',
  repeatTimes, additionRepeatTimes} = options;
  let separatorBlock = addition;
  let result = '';  
  
  for (let i = 1; i < additionRepeatTimes; i++) {
    separatorBlock += `${additionSeparator}${addition}`;
  }

  for (let i = 1; i < repeatTimes; i++) {
    result += `${separator}${str}${separatorBlock}`;
  }

  return `${str}${separatorBlock}${result}`;  
}
  