const removeFromArray = function(array, ...args) {
  const newArray = array;
  for (let j = 0; j < args.length; j++) {
    for (let i = 0; i < newArray.length; i++) {
       if (newArray[i] === args[j]) {
        newArray.splice (i, 1);
        --i;
       }
    }
  }
  return newArray;
};



// PSUEDOCODE
// iterate through args
  // iterate over array
    // when a match comes remove match from array -- using splice() method


// Do not edit below this line
module.exports = removeFromArray;
