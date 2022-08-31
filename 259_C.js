function rle(s) {
  let a = [];
  a[0] = [s[0],1];
  for (let i = 1; i < s.length; i++) {
    if (s[i-1] != s[i]) {
      a.push([s[i], 1]);
    } else {
      a[a.length-1][1]++;
    }
  }
  return a;
}

function main(input) {
  input = input.trim().split('\n');
  let s = input[0];
  let t = input[1];
  
  let a = rle(s);
  let b = rle(t);
  if (a.length != b.length) return console.log('No');
  for (let i = 0; i < a.length; i++) {
    if (a[i][0] != b[i][0]) return console.log('No');
    if (a[i][1] == 1) {
      if (b[i][1] != 1) return console.log('No');
    } else {
      if (b[i][1] < a[i][1]) return console.log('No'); 
    }
  }
  console.log('Yes');
  
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
