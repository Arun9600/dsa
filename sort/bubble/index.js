//ascending
function bubble(arr) {
  let bubbled;
  do {
    bubbled = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        //for descending order change the condition arr[i] < arr[i+1]
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  } while (bubbled);
  return arr;
}

let arr = [1, 9, 6, 8, 10, 12];
console.log(bubble(arr));
