function quick(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1]; //last element in the array is pivot element
  let smallArray = [];
  let largeArray = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (pivot > arr[i]) {
      smallArray.push(arr[i]);
    } else if (pivot < arr[i]) {
      largeArray.push(arr[i]);
    }
  }
  return [...quick(smallArray), pivot, ...quick(largeArray)];
}
let arr = [0, -1, -100, 500, 50, 90, 75];
console.log(quick(arr));
