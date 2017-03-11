// 6) Return Largest Values of each element in an Array:
function largestOfFour(arr) {
  var output = [];

  for (var i=0; i < arr.length; i++) {
    var maxElement = Math.max.apply(null, arr[i]);
    output.push(maxElement);
  }

  return output;
}