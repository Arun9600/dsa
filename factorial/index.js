function test() {
  let n = document.getElementById("number").value;
  let op = document.getElementById("op");
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  op.textContent = `The Factorial Value for the entered value ${n} is ${result}`;
}
