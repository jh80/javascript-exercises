const removeFromArray = function(array, toRemove) {
  const newArray = array;
    for (let i = 0; i < newArray.length; i++) {
       if (newArray[i] === toRemove) {
        newArray.splice (i, 1);
       }
    }
    return newArray;
};
const array1 = [1, 2, 3, 4, 5];
console.log(array1);
removeFromArray(array1, 2);


// PSUEDOCODE
// iterate over array
  // when a match comes remove match from array -- using splice() method


// Do not edit below this line
module.exports = removeFromArray;
