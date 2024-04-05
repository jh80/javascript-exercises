// PSUEDOCODE

// Turn string into an array
// use filter to take out any non-letter characters (including spaces)
  // match against a regex to determine if it is a letter
// iterate through half the array/string comparing array[i] to array[-(i+1)]
    // return false on any non matches
    // if all parts match return true

const palindromes = function (string) {
    // format string into array with only letters
    const asArray = Array.from(string.toLowerCase());
    const letters = (asArray).filter((letter) => (letter.match(/[a-z0-9]/)));
    // check for palendrome
    for (let i = 0; i < Math.floor(letters.length/2); i++) {
        if (letters[i] != letters[letters.length-(i+1)]) {
            return false;
        }
    } 
    return true;
};

// Do not edit below this line
module.exports = palindromes;
