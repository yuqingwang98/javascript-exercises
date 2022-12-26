const sumAll = function(start, finish) {
  if (start<0 || finish<0 ||!Number.isInteger(start) ||!Number.isInteger(finish)){
    return 'ERROR'
  }
  if (start>finish) {
    var temp = start
    var start = finish
    finish = temp
  }

  let res = start;
  for (i=start; i<finish; i++) {
    res = res + i + 1
  }
  return res
};

console.log(sumAll('s', 1))

// Do not edit below this line
module.exports = sumAll;
