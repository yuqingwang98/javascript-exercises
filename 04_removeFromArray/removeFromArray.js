const removeFromArray = function(input, elm) {
  let args = Array.from(input);
  const index = args.indexOf(elm);
  args.splice(index, 1);
  return args
};

console.log(removeFromArray([1, 2, 3, 4], 3))

// Do not edit below this line
module.exports = removeFromArray;
