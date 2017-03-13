function getIndexToIns(arr, num) {
  arr.sort(function(a, b) { return a - b; });
  var index;

  for (var i=0; i < arr.length; i++) {
    if (num <= arr[i]) {
      index = i;
      break
    }
  }

  if (typeof index != "undefined") {
    return index;
  } else {
    return arr.length;
  }
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));