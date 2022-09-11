const Main = input =>{
  input=input.split("\n");
  let tmp=input[0].split("");
  let a=tmp[1];
  let b=tmp[2];
  console.log(a+b);
}
Main(require("fs").readFileSync("/dev/stdin","utf8"));
