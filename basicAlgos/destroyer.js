function destroyer(arr) {
  var filterArgs = [];

  // Store filter arguments in array
  for (var i=1; i < arguments.length; i++) {
    filterArgs.push(arguments[i]);
  }

  // Perform set difference (exclusive)
  var output = arr.filter(function(x) {
    return filterArgs.indexOf(x) < 0;
  });

  return output;
}

console.log(destroyer([1,1,2,3,1,3,2], 2, 3));