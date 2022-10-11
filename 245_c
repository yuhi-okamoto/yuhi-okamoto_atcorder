const main = (input) => {
  const _input = input.trim().split("\n");
  const [N, K] = _input[0].split(/\s+/).map((i) => i - 0);
  const A = _input[1].split(/\s+/).map((i) => i - 0);
  const B = _input[2].split(/\s+/).map((i) => i - 0);

  let dp = new Array(N).fill(0);
  let ep = new Array(N).fill(0);
  dp[0] = ep[0] = 1;

  for (let i = 0; i < N - 1; i++) {
    if (dp[i]) {
      if (Math.abs(A[i] - A[i + 1]) <= K) dp[i + 1] = 1;
      if (Math.abs(A[i] - B[i + 1]) <= K) ep[i + 1] = 1;
    }
    if (ep[i]) {
      if (Math.abs(B[i] - A[i + 1]) <= K) dp[i + 1] = 1;
      if (Math.abs(B[i] - B[i + 1]) <= K) ep[i + 1] = 1;
    }
  }

  if (dp[N - 1] || ep[N - 1]) console.log("Yes");
  else console.log("No");
};

main(require("fs").readFileSync("/dev/stdin", "utf-8"));
