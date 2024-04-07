// map to make an array of ages
// reduce to search for the oldest

// reduce array 

const findTheOldest = function(array) {
    const oldest = array.reduce(((last, curr) => {
        const d = new Date();
        const thisYear = d.getFullYear();
        let currEndYear;
        let lastEndYear;
        if (curr.yearOfDeath) {
            currEndYear = curr.yearOfDeath;
        } else {
            currEndYear = thisYear;
        }
        if (last.yearOfDeath) {
            lastEndYear = last.yearOfDeath;
        } else {
            lastEndYear = thisYear;
        }
        const currAge = currEndYear - curr.yearOfBirth;
        const lastAge = lastEndYear - last.yearOfBirth
        return (currAge > lastAge) ? curr : last;
    }))
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
