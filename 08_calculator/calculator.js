const add = function(num1, num2) {
  return num1+num2

};

const subtract = function(num1, num2) {
  return num1-num2
};

const sum = function(arr) {
  let total = 0;
  if(arr.length == 0) {
    return 0
  }
  for (var i in arr) {
  total += arr[i];
  }
  return total
};

const multiply = function(arr) {
  let total = 1;
  for (var i in arr) {
    total *= arr[i];
    }
  return total
};

const power = function(num1, num2) {
  return num1**num2
};

const factorial = function(num) {
    // if num is 0 or 1, return 1
    var rval=1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
