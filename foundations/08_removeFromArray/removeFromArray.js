const removeFromArray = function (arr, ...excludes) {
  let result = [];
  for (let i of arr) {
    if (!excludes.includes(i)) result.push(i);
  }

  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
