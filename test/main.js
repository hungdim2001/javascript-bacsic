function getIndexToIns(arr, num) {
  var xx= function (arr) {
    for (var i = 0; i < arr.length - 1; i++) {
      for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          var x = arr[i];
          arr[i] = arr[j];
          arr[j] = x;
        }
      }
    }
  };
  xx(arr);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }
  return arr.length;
}
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
