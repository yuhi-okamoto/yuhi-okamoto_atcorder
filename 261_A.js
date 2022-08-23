function main(input) {
    const args = input.split('\n');
    const nums = args[0].split(' ');
    const a1 = parseInt(nums[0], 10);
    const b1 = parseInt(nums[1], 10);
    const a2 = parseInt(nums[2], 10);
    const b2 = parseInt(nums[3], 10);

    if(b1 < a2 || b2 < a1) {
        console.log(0);
    } else {
        if(a1 < a2 && a2 <= b1 && b1 <= b2) {
            console.log(b1 - a2);
        } else if(a2 <= a1 && b1 <= b2) {
            console.log(b1 - a1);
        } else if(a2 < a1 && a1 <= b2) {
            console.log(b2 - a1);
        } else if(a1 <= a2 && b2 <= b1) {
            console.log(b2 - a2);
        }
    }
  }
  
  main(require('fs').readFileSync('/dev/stdin', 'utf8'));
