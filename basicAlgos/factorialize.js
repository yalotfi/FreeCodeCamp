// 2) Factorialize a Number:
function factorialize(num) {
  // Factorize integers only:
  num = Math.round(num);
  
  // Declare Variables
  var numArray = [];
  var factorial;
  
  // Create Array from range of given number, num:
  if (num > 0) {
    for (var i=1; i < num+1; i++) {
      numArray.push(i);
    }
  } else {
    numArray.push(1);
  }

  // Compute factorial with reduce method and callback function:
  factorial = numArray.reduce(function (previousVal, currentVal) {
    return previousVal * currentVal;
  });

  // Return factorial value:
  return factorial;
}