function main(input) {
  let [n,...s] = input.trim().split("\n");
  n = Number(n);
  const a = new Array(10).fill(0);
  for (let i=0;i<10;i++) {
    let b = new Array(10).fill(0);
    for (let j=0;j<n;j++) {
      b[s[j][i]]++;
    }
    for (let j=0;j<10;j++) {
      if (b[j] > 0) {
        a[j] = Math.max(a[j],(b[j]-1)*10+i);
      }
    }
  }
  console.log(Math.min(...a));
}
main(require("fs").readFileSync("/dev/stdin","utf8"));
