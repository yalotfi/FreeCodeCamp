function ceasarCipher(str) {
  var strArray = str.toUpperCase().split("");

  for (var i=0; i < strArray.length; i++) {
    var indexChar = strArray[i];
    if (indexChar.match(/[A-Z]/g)) {
      if (indexChar <= "M") {
        indexChar = String.fromCharCode(indexChar.charCodeAt(0) + 13);
      } else if (indexChar > "M") {
        indexChar = String.fromCharCode(indexChar.charCodeAt(0) - 13);
      }
    }
  }

  return strArray.join("");
}

console.log(ceasarCipher("SERR CVMMN!"));