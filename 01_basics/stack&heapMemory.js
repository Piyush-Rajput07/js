// Primitive datatypes
// 7 types: String, number, boolean, null, undefined, symbol, bigint

// Non-primitive/Reference Types
// array, object, function

// Stack (primitive datatypes), heap (Non-Primitive)

let myYoutubeName = "piyushrajput"

let anotherName = myYoutubeName
anotherName = "piyushsingh"

console.log(myYoutubeName);
console.log(anotherName);


let userOne = {
    email: "userone@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne 
userTwo.email = "usertwo@google.com"

console.log(userOne);
console.log(userTwo);