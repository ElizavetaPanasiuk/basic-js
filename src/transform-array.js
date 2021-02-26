const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const resultArray = [];
  let index = 0;
  while(index < arr.length){
    let elem = arr[index];
    if(elem === '--discard-next' && index < arr.length && checkValue(arr[index + 1])){
      index += 2;
    }
    if(elem === '--discard-prev' && index !== 0 && checkValue(arr[index - 1]) && !checkValue(arr[index - 2])){
      resultArray.pop();
      index++;
    }
    if(elem === '--double-next' && index < arr.length && checkValue(arr[index + 1])){
      resultArray.push(arr[index + 1]);
      index++;
    }
    if(elem === '--double-prev' && index !== 0 && checkValue(arr[index - 1]) && !checkValue(arr[index - 2])){
      resultArray.push(arr[index - 1]);
      index++;

    } 
    if(checkValue(elem)){
      resultArray.push(arr[index]);
      index++;
    } else{
      index++;
    }
  }
  function checkValue(value) {
    return !(value === '--discard-next' || value === '--discard-prev' || value === '--double-next' || value === '--double-prev' || value === undefined);
  }
  return resultArray;
};
