// 1) Reverse String:
function reverseStr(str) {
  return str.split("").reverse().join("");
}


// 2) Factorialize a Number:
function factorialize(num) {
  // Factorize integers only:
  num = Math.round(num);
  
  // Declare Variables
  var numArray = [];
  var factorial;
  
  // Create Array from range of given number, num:
  if (num > 0) {
    for (var i=1; i < num+1; i++) {
      numArray.push(i);
    }
  } else {
    numArray.push(1);
  }

  // Compute factorial with reduce method and callback function:
  factorial = numArray.reduce(function (previousVal, currentVal) {
    return previousVal * currentVal;
  });

  // Return factorial value:
  return factorial;
}


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


// 4) Return Length of longest word in a sentence:
function findLongestWord(sentence) {
  /* Initialize two arrays:
    1) An array of words from input sentence.
    2) An array to hold length of each words.
  */
  var wordArray = sentence.split(" ");
  var lengthArray = [];

  // Populate second array with length of each word:
  for (var i=0; i < wordArray.length; i++) {
    lengthArray.push(wordArray[i].length);
  }

  // Return largest value, corresponding with longest word:
  return Math.max.apply(null, lengthArray);
}

