function bouncer(arr) {
  // Store values to exclude from output
  var illegal = [false, null, 0, "", undefined, NaN];

  // Perform set difference
  console.log("Uncleaned Array Length: ", arr.length)
  var cleanedArray = arr.filter(function(x) {
    return illegal.indexOf(x) < 0;
  });

  // Set difference not removing NaN:
  for (var i=0; i < cleanedArray.length+1; i++) {
    if (isNaN(cleanedArray[i])) {
      cleanedArray.pop(NaN);
      console.log("Found a NaN at index: ", i);
    } else {
      console.log("No NaN at Index", i);
    }
  }

  return cleanedArray;
}

var illegal = [false, null, 0, "", undefined, NaN];
// console.log(isNaN(illegal[illegal.length - 1]));


console.log(bouncer([1, 3, NaN, 6, false, 10]));
