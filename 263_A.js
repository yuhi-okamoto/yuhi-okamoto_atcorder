function main(input) {
    const args = input.split('\n');
    const nums = args[0].split(' ');
    const a = parseInt(nums[0], 10);
    const b = parseInt(nums[1], 10);
    const c = parseInt(nums[2], 10);
    const d = parseInt(nums[3], 10);
    const e = parseInt(nums[4], 10);
    const arr = [a, b, c, d, e];
    let f = function (x, y) {
        return x - y
    }
    const arr1 = arr.sort(f);
    if((arr1[0] === arr1[2] && arr1[3] === arr1[4]) || (arr1[0] === arr1[1] && arr1[2] === arr1[4])){
        console.log('Yes');
    }else{
        console.log('No');
    }
}
 
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
