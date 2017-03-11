// 4) Return Length of longest word in a sentence:
function findLongestWord(sentence) {
  /* Initialize two arrays:
    1) An array of words from input sentence.
    2) An array to hold length of each word.
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