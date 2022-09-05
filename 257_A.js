function main(input) {
  const args = input.split('\n');
  const nums = args[0].split(' ');
  const N = parseInt(nums[0], 10);
  const X = parseInt(nums[1], 10);
  const arr = [];
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for(let i = 0;i < chars.length;i++){
    for(let j = 0;j < N;j++){
      arr.push(chars[i]);
    }
  }
  console.log(arr[X - 1]);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
