function test() {
  let n = document.getElementById("number").value;
  let op = document.getElementById("op");
  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  op.textContent = `Fibonacci Series for the entered ${n} is ${arr}`;
}
