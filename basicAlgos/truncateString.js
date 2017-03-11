function truncateString(str, num) {
  // Declare Variables
  var concatStr = "...";  // String to be concatenated
  var truncIndex = num - concatStr.length;  // Truncate index of string

  if (num >= str.length) {
    return str;
  } else if (truncIndex <= concatStr.length) {
    return str.substring(0, num).concat(concatStr);
  } else {
    return str.substring(0, truncIndex).concat(concatStr);
  }
}

var strTest = "A-tisket a-tasket A green and yellow basket";
var numTest = strTest.length - strTest.length + 3;

console.log(truncateString(strTest, numTest));
