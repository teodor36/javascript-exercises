const fibonacci = function (n) {
  if (+n === 0) return 0;
  if (+n < 0) return "OOPS";

  const seq = [1, 1];
  while (seq.length + 1 <= +n) {
    seq.push(seq.at(-1) + seq.at(-2));
  }

  return seq.at(-1);
};

// Do not edit below this line
module.exports = fibonacci;
