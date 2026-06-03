const convertToCelsius = function (F) {
  return parseFloat((((F - 32) * 5) / 9).toFixed(1));
};

const convertToFahrenheit = function (C) {
  return parseFloat(((C * 9) / 5 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
