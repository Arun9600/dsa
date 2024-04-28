function test() {
  let n = document.getElementById("number").value;
  let op = document.getElementById("op");
  if (n <= 1) {
    op.textContent = `Please enter the number greater than 1`;
    return;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      op.textContent = `The entered number ${n} is not a prime number`;
      return;
    }
  }
  op.textContent = `The entered number ${n} is a prime number`;
}
