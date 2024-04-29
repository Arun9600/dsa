function insertion(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let preV = i - 1;
    while (preV >= 0 && arr[preV] > current) {
      arr[preV + 1] = arr[preV];
      preV = preV - 1;
    }
    arr[preV + 1] = current;
  }
  return arr;
}

let arr = [1, 8, 9, 7, 6, 3, 2, 4];
console.log(insertion(arr));
