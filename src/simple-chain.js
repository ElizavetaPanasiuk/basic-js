const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    value === undefined ? this.arr.push('') : this.arr.push(value);
    return this
  },
  removeLink(position) {
    if (typeof position !== 'number' || position > this.getlength || position !== Math.round(position)){
      this.arr = [];
      throw Error;
    }
    this.arr.splice(position - 1, 1);
    return this
  },
  reverseChain() {
    this.arr.reverse();
    return this
  },
  finishChain() {
    const result = this.arr.map(elem => `( ${elem} )`).join('~~');
    this.arr = [];
    return result;
  }
};

module.exports = chainMaker;
