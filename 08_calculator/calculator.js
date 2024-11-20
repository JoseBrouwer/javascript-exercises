const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((sum, current) => {
    return sum + current;
  }, 0);
};

const multiply = function(array) {
  return array.reduce((product, current) => {
    return product * current;
  }, 1);
};

const power = function(a, pow) {
	return a ** pow;
};

const factorial = function(num) {
  let factorial = 1;
  if(num > 1)
  {
    for(let i = 2; i <= num; i++)
      factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
