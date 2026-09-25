let num = 5
console.log(num , "type of num is ", typeof num)
let var1= num + ""// coversion
console.log(var1 , "type of var1 is ", typeof var1)
let var2 =var1 + 6
console.log(var2 , "type of var2 is ", typeof var2)
var2 = var2-6 //conversion
console.log(var2 , "type of var2 is ", typeof var2)

let var3 =Boolean("0")
console.log(var3)
 let var4 = 0 
 console.log(Boolean(var4))
 let var5 = String(555)
 console.log(typeof var5)
 var5 = var5+" "+"ILU"
console.log(var5)

console.log(Boolean(Number(var5)))

var empty_String = ""
console.log(Boolean(empty_String))
var undef
console.log(Boolean(undef))