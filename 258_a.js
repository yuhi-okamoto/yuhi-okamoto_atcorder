function Main(input) {
  input = input.split("\n");
  let K = parseInt(input[0], 10);
  
  let min = 0;
  if(K >= 60) {
    min = ("00" + (K % 60)).slice(-2);
    K = 21 + Math.floor(K / 60);
  }else{
    min = ("00" + K).slice(-2);
    K = 21;
  }
  
  console.log(K + ":" + min);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
