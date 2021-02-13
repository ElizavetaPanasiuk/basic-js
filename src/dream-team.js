const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  return members.toString().split(',').filter(member => typeof (member) === 'string' && member.split('').every(letter => isNaN(letter))).map(member => member.trim()[0].toUpperCase()).sort().join('');
}
