const leapYears = function(year) {
    if (year%400 === 0) return true;
    if (year%100 === 0) return false;
    if (year%4 === 0) return true;
    return false;
};

// NOTES
// After looking at the solution I see this can be trimed down a lot.
// I did not think about how the || operator paired with the &&
// operator would eliminate the need for multiple if conditions.

// PSUEDOCODE
// If a year is divisible by 400 return leap year
// If a year is divisible by 100 return not a leap year
// If a year is divisible by 4 return leap year 

// Do not edit below this line
module.exports = leapYears;
