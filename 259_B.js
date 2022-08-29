function Main(input) {
	input = input.split("\n")
    const nums = input[0].split(" ")
    const a = Number(nums[0])
    const b = Number(nums[1])
    const d = Number(nums[2])
    var a1 = a * Math.cos(d * Math.PI / 180) - b * Math.sin(d * Math.PI / 180)
    var b1 = a * Math.sin(d * Math.PI / 180) + b * Math.cos(d * Math.PI / 180)    
    console.log(a1 + " " + b1)
    
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
