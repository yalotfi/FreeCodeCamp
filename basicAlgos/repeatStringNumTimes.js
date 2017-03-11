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
