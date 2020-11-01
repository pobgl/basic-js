const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    
    let arrDepth = 1;

    for (let arrElement of arr) {
      if (Array.isArray(arrElement)) {
        let depth = this.calculateDepth(arrElement) + 1;
        if (depth > arrDepth) {
          arrDepth = depth;
        }
      }
    }

    return arrDepth;

  }
};