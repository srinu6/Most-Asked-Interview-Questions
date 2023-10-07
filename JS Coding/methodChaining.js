// Method chaining is an object-oriented paradigm, in which the methods usually share the same reference,
// which in JavaScript is done by sharing this (current context) from each method.

// Input:
// const calculator = new CALC();
// calculator.add(10).subtract(2).divide(2).multiply(5);
// console.log(calculator.total);

// Output:
// 20

const CALC = function () {
  this.total = 0;

  this.add = (val) => {
    this.total += val;
    return this;
  };

  this.subtract = (val) => {
    this.total -= val;
    return this;
  };

  this.multiply = (val) => {
    this.total *= val;
    return this;
  };

  this.divide = (val) => {
    this.total /= val;
    return this;
  };

  this.value = () => this.total;
};
