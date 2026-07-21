//Snippet 1 - var hoisting
// var is hoisted and initialized with undefined before code runs
//so x exists in memory but has no value yet

console.log(x); //undefined
var x = 5;

//Snippet2 - let TDZ
//let is hoisted but not initialized
// accessing it before declaration throws ReferenceError
//This gap is called the Temporal Dead Zone (TDZ)

console.log(y); // Reference Error: Cannot access 'y' before initialization
let y = 5;

