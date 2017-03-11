// 3) Check if a String is a Palindrome:
function palindrome(str) {
  // Process only alphanumerics:
  str = str.toLowerCase().match(/[a-z0-9]+/g).join("");

  // Reverse processed string, str:
  var reversed = str.split("").reverse().join("");

  // Check if input string, str is a palindrome:
  if (str === reversed) {
    return true;
  } else {
    return false;
  }
}