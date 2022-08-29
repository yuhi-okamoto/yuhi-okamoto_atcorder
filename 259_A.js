function main(input) {
const args = input.split('\n');
  let nums = args[0].split(' ');
  let N = Number(nums[0]);
  let M = Number(nums[1]);
  let X = Number(nums[2]);
  let T = Number(nums[3]);
  let D = Number(nums[4]);
  if( X < M ){
    console.log(T)
  } else{
    console.log(T-(X-M)*D)
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
