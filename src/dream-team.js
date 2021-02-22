const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  return Array.isArray(members) && members.filter(member => typeof(member) === 'string').map(member => member.trim()[0].toUpperCase()).sort().join('');
}
