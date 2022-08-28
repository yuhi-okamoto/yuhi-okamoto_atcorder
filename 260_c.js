function Main(input) {
	input = input.split("\n")
    const NXY = input[0].split(" ")
    const N = Number(NXY[0])
    const X = Number(NXY[1])
    const Y = Number(NXY[2])
    var R = 1
    var B = 0
    var Rb = 1
    var Bb = 0
    for(i =N; i>1 ; i--){
        Bb = B
        Rb = R
    	R = Rb + Bb + Rb * X
    	B = (Bb + Rb * X) * Y        
    }
    console.log(B)
    
}



Main(require("fs").readFileSync("/dev/stdin", "utf8"));
