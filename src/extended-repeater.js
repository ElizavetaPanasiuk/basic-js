const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str);
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const addition = options.addition === undefined ? '' : String(options.addition);
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';
  const additionString = (new Array(additionRepeatTimes)).fill(addition).join(additionSeparator) || '';
  const elem = additionString ? str + additionString : str;
  return (new Array(repeatTimes)).fill(elem).join(separator);
};
  