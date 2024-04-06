
const fibonacci = function(index) {
    let fibNum = "OOPS";
    if (index == 0) {
        fibNum = 0;
    } else if (index == 1) {
        fibNum = 1;
    } else if ( index > 1) {
        fibNum = (fibonacci(index-1) +fibonacci(index-2));
    }
    return fibNum;
};

// Do not edit below this line
module.exports = fibonacci;
