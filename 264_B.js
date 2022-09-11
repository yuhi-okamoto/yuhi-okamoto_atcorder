function Main(input) {
  const n = input.trim()
 
  let ans = []
  for (i = 0; i < n; i++) {
    ans[i] = []
    for (j = 0; j <= i; j++) {
      if (j == 0 || j == i) {
        ans[i][j] = 1
      } else {
        ans[i][j] = ans[i - 1][j - 1] + ans[i - 1][j]
      }
    }
    console.log(ans[i].join(' '))
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
