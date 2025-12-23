const accountId = "12345"
let accountEmail = "piyush@gmail.com"
var accountPassword = "81929"
accountCity = "Delhi"

// accountId = "122"
accountEmail = "piyush@google.com"
accountPassword = "212121"
accountCity = "Gurgaon"

/*
prefer not to use var because of the 
issue of block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])
console.log(typeof(accountCity));
