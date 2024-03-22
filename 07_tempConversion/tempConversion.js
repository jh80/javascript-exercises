const convertToCelsius = function(tempF) {
  const tempC = Number(((tempF-32)*(5/9)).toFixed(1));
  return tempC;
};

const convertToFahrenheit = function(tempC) {
  const tempF = Number((tempC*(9/5)+32).toFixed(1));
  return tempF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
