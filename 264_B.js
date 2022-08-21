function main(input) {
    const args = input.split('\n');
    const nums = args[0].split(' ');
    const i = parseInt(nums[0], 10);
    const j = parseInt(nums[1], 10);

    if(i-1 === 0 || i-1 === 14 || j-1 === 0 || j-1 === 14){
      console.log("black");
    }else if((i-1 === 2 || i-1 === 12) && !(j-1 === 1 || j-1 === 13)){
      console.log("black");
    }else if((i-1 === 4 || i-1 === 10) && !(j-1 === 1 || j-1 === 3 || j-1 === 11 || j-1 === 13)){
      console.log("black");
    }else if((i-1 === 6 || i-1 === 8) && !(j-1 === 1 || j-1 === 3 || j-1 === 5 || j-1 === 9 || j-1 === 11 || j-1 === 13)){
      console.log("black");1
    }else if((i-1 === 7) && (j-1 === 2 || j-1 === 4 || j-1 === 6 || j-1 === 8 || j-1 === 10 || j-1 === 12)){
      console.log("black");
    }else if((j-1 === 2 || j-1 ===12) && !(i-1 === 1 || i-1 === 13)){
      console.log("black");
    }else if((j-1 === 4 || j-1 === 10) && !(i-1 === 1 || i-1 === 3 || i-1 === 11 || i-1 === 13)){
      console.log("black");
    }else if((j-1 === 6 || j-1 === 8) && !(i-1 === 1 || i-1 === 3 || i-1 === 5 || i-1 === 9 || i-1 === 11 || i-1 === 13)){
      console.log("black");
    }else{
      console.log("white");
    }
}
    
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
