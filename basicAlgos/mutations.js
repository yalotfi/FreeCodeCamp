function mutation(arr) {
  // Accept a two-element array of strings
  var firstWord = arr[0].toLowerCase();
  var secondWord = arr[1].toLowerCase();

  // Vector of indices of matching characters
  var indexArray = [];
  for (var i=0; i < secondWord.length; i++) {
    indexArray.push(firstWord.indexOf(secondWord[i]));
  }

  // If any indices are not common, -1, condition return false
  if (Math.min.apply(null, indexArray) >= 0) {
    return true;
  } else {
    return false;
  }
}

console.log(mutation(["Alien", "line"]));