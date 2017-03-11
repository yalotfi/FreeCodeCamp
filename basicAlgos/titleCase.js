// 5) Capitalize First Letters in a sentence:
function titleCase(str) {
  // Declare local variables:
  var strArray = str.toLowerCase().split(" ");
  var capIndex = [];
  var output = [];

  // Proper capitalizations:
  for (var i=0; i < strArray.length; i++) {
    var length = strArray[i].length;
    capIndex[i] = strArray[i][0].toUpperCase();
    output[i] = capIndex[i] + strArray[i].substr(1, length);
  }
  return output.join(" ");
}