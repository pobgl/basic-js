const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here

  let catsNumber = 0;

  for(let i of matrix) {
    for (let n of i) {
      if (n == '^^') {
        catsNumber++
      }
    }      
  }
  return catsNumber;
};
