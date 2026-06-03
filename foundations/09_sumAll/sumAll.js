const sumAll = function (a, b) {
  if (typeof a !== "number" || typeof b !== "number") return "ERROR";
  if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
  if (a < 0 || b < 0) return "ERROR";

  let min;
  let max;

  if (a < b) {
    min = a;
    max = b;
  } else {
    min = b;
    max = a;
  }

  let sum = 0;

  while (min <= max) {
    sum += min++;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
