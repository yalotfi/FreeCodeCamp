function bouncer(arr) {
  // Store values to exclude from output
  var illegal = [false, null, 0, "", undefined, NaN];

  return this.filter(function(illegal) {
    return arr.indexOf(illegal) < 0;
  });
}

var illegal = [false, null, 0, "", undefined, NaN];
console.log([7, "ate", "", false, 9].indexOf(illegal));