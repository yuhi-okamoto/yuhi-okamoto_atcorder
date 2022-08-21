function main(input) {
    const args = input.split("\n");
    const N = args[0];
    const arr = Array.from(N);

    for (let i = 0; i < 7; i++){
      switch(arr[i]){
        case 'a':
          arr[i] = '1';
          break;
        case 't':
          arr[i] = '2';
          break;
        case 'c':
          arr[i] = '3';
          break;
        case 'o':
          arr[i] = '4';
          break;
        case 'd':
          arr[i] = '5';
          break;
        case 'e':
          arr[i] = '6';
          break;
        case 'r':
          arr[i] = '7';
          break;
      }
    }
    const arr1 = arr.map( str => parseInt(str, 10) );
    let count = 0;

    for(let outer = 0; outer < arr1.length -1; outer++){
        for(let i = arr1.length-1; i > outer; i--){
            if(arr1[i] < arr1[i-1]){
                let tmp = arr1[i];
                arr1[i] = arr1[i-1];
                arr1[i-1] = tmp;
                count = count + 1;
            }
        }
    }
    console.log(count);
  }
  
  main(require("fs").readFileSync("/dev/stdin", "utf8"));
