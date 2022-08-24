function main(input) {
    const args = input.split("\n");
    const S = args[0].split("")

    if (S[0] != S[1] && S[0] != S[2]){
        console.log(S[0])
      }
    else if(S[1] != S[2] && S[1] != S[0]){
        console.log(S[1])
    }
    else if(S[2] != S[1] && S[2] != S[0]){
        console.log(S[2])
    }
    else{
      console.log("-1")
    }
  }
  
  main(require("fs").readFileSync("/dev/stdin", "utf8"));
