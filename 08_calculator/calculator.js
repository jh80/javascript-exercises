const add = function(...nums) {
  let total = 0;
	for (const num of nums) {
    total += num;
  }
  return total;
};

const subtract = function(initial, ...nums) {
  let total = initial;
	for (const num of nums) {
    total -= num
  }
  return total;
};

 const sum = function(nums) {
  return nums.reduce((total, curr) => total + curr, 0);
 };

const multiply = function(nums) {
  return nums.reduce((total, curr) => total * curr, 1);
};

const power = function(num, exponent) {
	return num**exponent;
};

const factorial = function() {
	
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
