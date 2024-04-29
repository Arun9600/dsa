function search() {
  let n = parseInt(document.getElementById("number").value);
  let op = document.getElementById("op");
  let arr = [3, 2, 1, 0, 9, 8, 6];
  //binary search will work only on sorted array, if the array is not sorted by default we need to sort it and perform binary search
  arr.sort((a, b) => {
    return a - b;
  });
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === n) {
      op.textContent = `The index of the entered value ${n} is ${middle}`;
      return;
    }
    if (arr[middle] > n) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  op.textContent = `The entered value ${n} is not present in the array`;
}
