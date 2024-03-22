const sumAll = function(num1, num2) {
    let sum = 0;

    if (num1 < 0 || num2 < 0) return 'ERROR';
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return 'ERROR';
    if (num2 < num1) {
        const temp = num1;
        num1 = num2;
        num2 = temp;
    } 

    for (let i = num1; i <= num2; i++) {
        sum += i;
    }
    return sum;
};

/*
// This is my original answer, above shows changes I made after looking at the solution

const sumAll = function(num1, num2) {
    let smallNum;
    let bigNum;
    let sum = 0;

    if (num1 < 0 || 
        num2 < 0 || 
        (typeof num1 != 'number') || 
        (typeof num2 != 'number')) {
        return 'ERROR';
    }
    else if (num1 < num2) {
        smallNum = num1;
        bigNum = num2;
    } else if (num2 < num1) {
        smallNum = num2;
        bigNum = num1;
    } else {
        return num1 + num2;
    }

    for (let i = smallNum; i <= bigNum; i++) {
        sum = sum+i;
    }
    return sum;
};
*/

// PSUEDOCODE
// Compare numbers to find the larger number 
// Start a loop from lower number to bigger number
    // add i to sum
    // end loop when i equals larger number
// return sum

// Do not edit below this line
module.exports = sumAll;
