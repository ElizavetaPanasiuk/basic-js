const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const resultArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== '--double-next' && arr[i] !== '--double-prev' && arr[i] !== '--discard-next' && arr[i] !== '--discard-prev') {
      resultArray.push(arr[i]);
    } else if (arr[i] === '--double-next' && checkValue(arr[i + 1])) {
      resultArray.push(arr[i + 1]);
    } else if (arr[i] === '--double-prev' && checkValue(arr[i - 1]) && arr[i-2] !== "--discard-next") {
      resultArray.push(arr[i - 1]);
    } else if (arr[i] === '--discard-next' && checkValue(arr[i + 1])) {
      i++;
    } else if (arr[i] === '--discard-prev' && checkValue(arr[i - 1]) && arr[i-2] !== "--discard-next") {
      resultArray.pop(arr[i - 1]);
    }
  }

  function checkValue(value) {
    return !(value === '--discard-next' || value === '--discard-prev' || value === '--double-next' || value === '--double-prev' || value === undefined);
  }
  return resultArray;
};
