// 7) Check last string against input string:
//Solution 1 (Robust):
function confirmEnding01(str, target) {
  // Look for spaces to check if string is a word or sentence:
  if (str.match(/\s/gi) === null) {
    // Store string and target length to compare position, NOT index:
    var strL = str.length;
    var tarL = target.length;

    // If the target letters match the ending letters of the word, true.
    if (str.substr(strL - tarL) === target ) {
      return true;
    } else {
      return false;
    }
  } else {
    // Input is not a word, so split into array of words.
    var strArray = str.toLowerCase().split(" ");
    var arrayLen = strArray.length - 1;  // Store array length for Indexing

    // If the final array element equals the target, true.
    if (strArray[arrayLen] === target) {
      return true;
    } else {
      return false;
    }
  }
}


// Solution 2 (Simple):
function confirmEnding02(str, target) {
  // Store string and target length to compare position, NOT index:
  var strL = str.length;
  var tarL = target.length;

  // If the target letters match the ending letters of the word, true.
  if (str.substr(strL - tarL) === target ) {
    return true;
  } else {
    return false; 
}