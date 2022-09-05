function main(input) {
  let [N, ...masu] = input.trim().split("\n");
  N = Number(N);
  masu = masu.map(e => e.split("").map(Number));
  
  let answer = 0;
  const ym = [-1,-1,-1,0,0,1,1,1]; 
  const xm = [-1,0,1,-1,1,-1,0,1];　
  
  for(let i = 0; i < N; i++){
    for(let j = 0; j < N; j++){
      
      for(let k = 0; k < 8; k++){
        let now = 0; 
        let y = i; 
        let x = j; 
        
        for(let l = 0; l < N; l++){
          now *= 10; 
          now += masu[x][y]; 
          
          x += xm[k]; 
          y += ym[k]; 

          y %= N;
          y += N;
          
          x %= N;
          x += N;
          
          x %= N;
          y %= N;
        }
        answer = Math.max(answer,now);
      }
    }
  }
  
  console.log(answer)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
