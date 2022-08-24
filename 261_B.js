function main(input) {
    const args = input.split("\n");
    const N = parseInt(args[0], 10);
    args.splice(0, 1);
    const A = args.map((l) => l.split(""));

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
          if (
            (A[i][j] === "W" && A[j][i] !== "L") ||
            (A[i][j] === "L" && A[j][i] !== "W") ||
            (A[i][j] === "D" && A[j][i] !== "D")
          )
            return "incorrect";
        }
      }
      return "correct";
    }
  
  console.log(main(require("fs").readFileSync("/dev/stdin", "utf8")));
