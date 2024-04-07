// map to make an array of ages
// reduce to search for the oldest

// reduce array 

const findTheOldest = function(array) {
    const oldest = array.reduce((last, curr) => {
        const d = new Date();
        const thisYear = d.getFullYear();
        let currEndYear = curr.yearOfDeath;
        let lastEndYear = last.yearOfDeath;
        if (!currEndYear) {
            currEndYear = thisYear;
        }
        if (!lastEndYear) {
            lastEndYear = thisYear;
        }
        return (currEndYear - curr.yearOfBirth) > (lastEndYear - last.yearOfBirth) ? curr : last;
    })
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
