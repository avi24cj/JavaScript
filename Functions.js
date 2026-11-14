function OnePlusAvg(a,b){
    console.log("OnePlusAvg for ",a,b)
    return 1+(a+b)/2
}

let a = 5;
let b = 6;
let result = OnePlusAvg(a,b)
console.log("Result ===>",result)

 a = 15;
 b = 16;
 result = OnePlusAvg(a,b)
console.log("Result ===>",result)

 a = 25;
 b = 26;
 result = OnePlusAvg(a,b)
console.log("Result ===>",result)

const OnePlusAvgMod = (x,y)=>{
    console.log("OnePlusAvgMod for ",x,y)
    console.log( 1+(x+y)/2)
}

OnePlusAvgMod(50,60)
OnePlusAvgMod(17,28)
