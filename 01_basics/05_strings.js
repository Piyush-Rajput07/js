const name = "Piyush"
const repo = 50

// console.log(name + repo + " Value")

// console.log(`Hello, my name is ${name } and my repo count is ${repo}`);

const gameName = new String('piyush-pks-singh')
// console.log(gameName)

// console.log(gameName.toUpperCase())
// console.log(gameName)
console.log(gameName.charAt(2))
console.log(gameName.indexOf('s'))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const newStringOne = "   piyush.  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://piyush.com/piyush%20rajput"
console.log(url.replace('%20', '-'))

console.log(url.includes('singh'))

console.log(gameName.split('-'))