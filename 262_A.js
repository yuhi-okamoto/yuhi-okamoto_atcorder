function main(input) {
    const args = input.split("\n");
    const n = parseInt(args, 10);
    switch(n % 4){
        case 0:
            console.log(n + 2)
            break;
        case 1:
            console.log(n + 1);
            break;
        case 2:
            console.log(n);
            break;
        case 3:
            console.log(n + 3);
            break;
        default:
            console.log("該当なし")
    }
}
  
  main(require("fs").readFileSync("/dev/stdin", "utf8"));
