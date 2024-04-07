// map to make an array of ages
// reduce to search for the oldest

// reduce array 

const findTheOldest = function(array) {
    const oldest = array.reduce((last, curr) => {
        const currAge = calcAge(curr.yearOfBirth, curr.yearOfDeath)
        const lastAge = calcAge(last.yearOfBirth, last.yearOfDeath)
        return (currAge) > (lastAge) ? curr : last;
    })
    return oldest;
};

function calcAge(birth, death) {
    if (!death) {
      death = new Date().getFullYear();   
    } 
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
