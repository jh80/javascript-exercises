const repeatString = function(string, timesRepeated ) {
    let stringRepeated = '';
    if (timesRepeated < 0) {
        return 'ERROR';
    } else {
        for (let i = 0; i < timesRepeated; i++){
            stringRepeated += string;
        }
        return stringRepeated;
    }
};

// Do not edit below this line
module.exports = repeatString;
