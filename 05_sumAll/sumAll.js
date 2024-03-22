const sumAll = function(num1, num2) {
    let smallNum;
    let bigNum;
    let sum = 0;
    // CHANGE TO SWITCH SINTAX FOR PRACTICE
    if (num1 < 0 || num2 < 0) {
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

// PSUEDOCODE
// Compare numbers to find the larger number 
// Start a loop from lower number to bigger number
    // add i to sum
    // end loop when i equals larger number
// return sum

// Do not edit below this line
module.exports = sumAll;
