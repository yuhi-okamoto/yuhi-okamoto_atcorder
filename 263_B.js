function main(input) {
    const args = input.split("\n");
    const n = parseInt(args[0], 10);
    const a = args[1].split(" ").map((n) => parseInt(n, 10));
    let i = n;
    let count = 0;
    while(i !== 1){
      count = count + 1;
      i = a[i-2];
    }
    console.log(count);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
