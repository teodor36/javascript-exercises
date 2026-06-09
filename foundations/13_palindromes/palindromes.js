const palindromes = function (str) {
  const strippedStr = str
    .split(" ")
    .join("")
    .replace(/[^\w\s]/g, "")
    .toLowerCase();
  return strippedStr === strippedStr.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
