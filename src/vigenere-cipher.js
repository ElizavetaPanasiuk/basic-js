const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  constructor(type = true){
    this.type = type;
  };

  encrypt(message, key) {
    const upMessage = message.toUpperCase();
    const upKey = key.toUpperCase();

    let result = '';

    if(message === undefined || key === undefined){
      throw new Error('Arguments error');
    }

    for (let i = 0, j = 0; i < upMessage.length; i++) {
      if (/^[A-Z]$/.test(upMessage[i])) {
        const letterIndex = (upMessage[i].charCodeAt() + (upKey[j % upKey.length]).charCodeAt() - 130) % 26;
        const letter = this.alphabet.charAt(letterIndex);
        result = `${result}${letter}`;
        j++;
      } else {
        result = `${result}${upMessage[i]}`;
      }
    }
  
    return this.type ? result : result.split('').reverse().join('');
}


decrypt(message, key) {
  const upMessage = message.toUpperCase();
  const upKey = key.toUpperCase();

  let result = '';
    if (message === undefined || key === undefined) {
      throw new Error('Arguments error');
    }

    for (let i = 0, j = 0; i < upMessage.length; i++) {
      if (/^[A-Z]$/.test(upMessage[i])) {
        const letterIndex = (upMessage[i].charCodeAt() - (upKey[j % upKey.length]).charCodeAt() + 104) % 26;
        const letter = this.alphabet.charAt(letterIndex);
        result = `${result}${letter}`;
        j++;
      } else {
        result = `${result}${upMessage[i]}`;
      }
    }
    return this.type ? result : result.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
