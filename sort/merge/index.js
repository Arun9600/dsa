function merge(myArray1, myArray2) {
  let combined = [];
  let i = 0;
  let j = 0;
  while (i < myArray1.length && j < myArray2.length) {
    if (myArray1[i] < myArray2[j]) {
      combined.push(myArray1[i]);
      i++;
    } else {
      combined.push(myArray2[j]);
      j++;
    }
  }
  while (i < myArray1.length) {
    combined.push(myArray1[i]);
    i++;
  }
  while (j < myArray2.length) {
    combined.push(myArray2[j]);
    j++;
  }
  return combined;
}

function mergeSort(originalArray) {
  if (originalArray.length === 1) {
    return originalArray;
  }
  let middle = Math.floor(originalArray.length / 2);
  let left = mergeSort(originalArray.slice(0, middle));
  let right = mergeSort(originalArray.slice(middle));
  return merge(left, right);
}
