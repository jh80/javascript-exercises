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
	return num**exponent; // In solution they use return Math.pow(a,b);
};

const factorial = function(num) {
  if (num === 0) return 1; // I originally had curly braces here, but their solution put it in one line so they didn't need the curly braces, so I changed mine to practice doing that too
  let total = 1;
  for (let i = 1; i <= num; i++) {
    total *= i;
  }
	return total
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
