const convertToCelsius = function (fahrenheit) {
  let celsius = (5 / 9) * (fahrenheit - 32);
  // celsius = celsius.toFixed(2);  // gives 0.00 for 0;
  celsius = Math.round(celsius * 10) / 10;
  return celsius;
};

const convertToFahrenheit = function (celsius) {
  let fahrenheit = (celsius * 9 / 5) + 32;
  // fahrenheit = fahrenheit.toFixed(2);
  fahrenheit = Math.round(fahrenheit * 10) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
