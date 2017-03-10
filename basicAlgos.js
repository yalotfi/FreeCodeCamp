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


// 6) Return Largest Values of each element in an Array:
function largestOfFour(arr) {
  var output = [];

  for (var i=0; i < arr.length; i++) {
    var maxElement = Math.max.apply(null, arr[i]);
    output.push(maxElement);
  }

  return output;
}


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


// 8) Repeat a given string num, number of times:
function repeatStringNumTimes(str, num) {
  if (num > 0) {
    var output = [];
    var i = 1;
    while (i <= num) {
      output.push(str);
      i += 1;
    }
    return output.join("");
  } else {
    return "";
  }
}
