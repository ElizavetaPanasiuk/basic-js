const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.toString().split(',').reduce((catsCounter, currentElement) => currentElement === '^^' ? catsCounter + 1 : catsCounter, 0);
};
