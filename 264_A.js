function main(input) {
  const str = 'atcoder';
  const args = input.split('\n');
  const nums = args[0].split(' ');
  const l = parseInt(nums[0], 10);
  const r = parseInt(nums[1], 10);
  const result = str.substr( l-1, r-l+1 );
 
  console.log(result);
}
 
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
