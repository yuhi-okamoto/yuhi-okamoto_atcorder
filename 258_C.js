function Main(input) {
  input = input.split("\n");
  let [n, q] = input[0].split(' ').map(Number);
  let s = input[1];
  let p = 0;

  for (let i = 0; i < q; i++) {
    let [t, x] = input[i + 2].split(' ').map(Number);
    if (t === 1) {
      p = (p - x + n) % n;
    } else {
      console.log(s[(p + x - 1) % n]);
    }
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
