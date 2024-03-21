const reverseString = function(string) {
    const stringAsArray = string.split("");
    stringAsArray.reverse();
    const reversedString = stringAsArray.join("");
    return reversedString;
};

// PSUEDOCODE
// Turn string into an array using -- split("")
// reverse array using -- reverse()
// turn array into a string -- using join("")

// Do not edit below this line
module.exports = reverseString;
