function Main(input) {
  input = input.split("\n");
  sss = input[0].split(" ");
  a = [];
  for(i = 0; i < sss.length; i++) a[i] = parseInt(sss[i]);
  N = a[0];
  S = input[1].split("");
  Ws = input[2].split(" ");
  otona = [];
  kodomo = [];
  for(i = 0; i < N; i++){
    if(S[i] === "1") otona.push(parseInt(Ws[i]));
    else kodomo.push(parseInt(Ws[i]));
  }
  ans = otona.length;
  now = otona.length;
  otona = sort_(otona);
  otona.push(10**10);
  kodomo = sort_(kodomo);
  kodomo.push(10**10);
  nextotonaindex = 0;
  nextkodomoindex = 0;
  while(otona[nextotonaindex] <= 10**9 || kodomo[nextkodomoindex] <= 10**9){
    otonaw = otona[nextotonaindex];
    kodomow = kodomo[nextkodomoindex];

    if(otonaw <= kodomow){
      now--;
      nextotonaindex++;
      if(otona[nextotonaindex] == otona[nextotonaindex-1]) continue;
    }else if(otonaw >= kodomow){
      now++;
      nextkodomoindex++;
      if(kodomo[nextkodomoindex] == kodomo[nextkodomoindex-1]) continue;
    }
    
    ans = Math.max(ans, now);
  }

  console.log(ans)
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));

function sort_(ar){
  ar = ar.sort(function(a,b){
    if( a < b ) return -1;
    if( a > b ) return 1;
    return 0;
  });
  return ar;
}
