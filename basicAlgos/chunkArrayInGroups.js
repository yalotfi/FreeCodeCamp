function chunkArrayInGroups(arr, size) {
  var outputArray = [];

  for (var  i=0; i < arr.length; i+=size) {
    var insert = arr.slice(i, size + i);
    outputArray.push(insert);
  }

  return outputArray;
}

// console.log(["a", "b", "c", "d"].length);

console.log(chunkArrayInGroups(["a", "b", "c", "d", "e"], 2));