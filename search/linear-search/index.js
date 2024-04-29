function search() {
  let n = parseInt(document.getElementById("number").value);
  let arr = [0, 1, 3, 2, 5];
  let op = document.getElementById("op");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      op.textContent = `The entered value's index is ${i}`;
      return;
    }
  }
  op.textContent = `The entered value ${n} is not present in the array`;
}
