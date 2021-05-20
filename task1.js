const convertFahrToCelsius = function (temp) {
  if (typeof temp === "string" || typeof temp === "number") {
    const tempCalc = ((temp - 32) * 5) / 9;
    return `${tempCalc.toFixed(4)} degree celsius`;
  } else {
    return console.log(`${temp} is not a valid number but a/an ${typeof temp}`);
  }
};
// test cases
console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius("0"));
console.log(convertFahrToCelsius([1, 2, 3]));
console.log(convertFahrToCelsius({ temp: 0 }));
