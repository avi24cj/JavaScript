let test_Str = "  Money is the crucial financial tool "
console.log(test_Str.toUpperCase())
console.log(test_Str.toLowerCase())
console.log(test_Str.slice(2,10))
console.log(test_Str.slice(10))
console.log(test_Str.slice(0,10),test_Str.slice(10))

console.log(test_Str.slice(0,10).concat(test_Str.slice(10)))

console.log(test_Str.slice(0,10).concat(test_Str.slice(10)).trim())

console.log(test_Str.slice(0,10).concat(test_Str.slice(10)).replaceAll(" ","Space"))

