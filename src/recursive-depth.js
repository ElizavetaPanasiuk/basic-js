const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let arrayDepth = 1;
    for(let elem of arr){
      let currentArrayDepth = 1;
      if(Array.isArray(elem)){
        currentArrayDepth += this.calculateDepth(elem);
        arrayDepth = currentArrayDepth > arrayDepth ? currentArrayDepth : arrayDepth;
      }
    }
    return arrayDepth;
  }
};