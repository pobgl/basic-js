const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here

  if (members instanceof Array || members != null || members != undefined) {
    let  result = '';

    for (let i=0; i < members.length; i++) {
      if (typeof members[i] === 'string') {
        result += members[i].toUpperCase().trim()[0]; 
      }
    }  
    return result.split('').sort().join('');    
  } else {
    return false;    
  }
};
