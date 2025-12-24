let score = "33abc"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber)
//console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN
// 1 => true, 0 => false

let isLoggedIn = "abc"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn)

// 1 => true, 0 => false
// "" => false
// "abc" => true

let someNumber = 22

let stringNumber = String(someNumber)
//console.log(stringNumber)
//console.log(typeof stringNumber)

// ************************* Operations **************************

let value = 8
let negValue = -value
console.log(negValue)

//Basic operations => +,-,*,**(power),/,%

let str1 = "hello"
let str2 = " piyush"

let str3 = str1 + str2
console.log(str3)

console.log(1 + "2" + 2)

let x = 3
let y = x++

console.log(`x: ${x}`)
console.log(`y: ${y}`)