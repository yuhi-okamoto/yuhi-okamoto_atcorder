function Main(input) {
  input = input.split("\n");
  let [n, k, q] = input[0].split(' ').map(Number);
  let A = input[1].split(' ').map(Number);
  let L = input[2].split(' ').map(Number);

  for (let i = 0; i < q; i++) {
    let pos = A[L[i] - 1];
    if (pos === n) continue;
    if (A.includes(pos + 1) === false) A[L[i] - 1]++;
  }

  console.log(A.join(' '));
}
Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
