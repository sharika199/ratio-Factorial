const radioOfTwoNumber = require("../ratio/index");
const factorialOfNumber = require("../factorial/index");

const ratioAndFactorial = (a, b, c) => {
  const ratio = radioOfTwoNumber(a, b);
  const factorial = factorialOfNumber(c);
  return { ratio, factorial };
};
module.exports = ratioAndFactorial;
