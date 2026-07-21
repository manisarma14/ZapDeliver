//Snippet 1 - var hoisting
// var is hoisted and initialized with undefined before code runs
//so x exists in memory but has no value yet

console.log(x); //undefined
var x = 5;

//Snippet2 - let TDZ
//let is hoisted but not initialized
// accessing it before declaration throws ReferenceError
//This gap is called the Temporal Dead Zone (TDZ)

// console.log(y); // Reference Error: Cannot access 'y' before initialization
// let y = 5;

//Snippet 3 - var is function scoped
// since var is function scoped , it can be printed anywhere in the function
function testVar(){
    if(true){
        var a = 10
    }
    console.log(a)
}
testVar();


//Snippet 4 - let is blocked scoped
// since let is block scoped it can be only printed in a block , accessing outside the block will lead to error
function testLet() {
    if (true) {
        let b = 20;
    }
    //console.log(b);
}
testLet();

//Snippet 5 - var in a loop (classic bug)
// here var will have same variable for all the callbacks so what ever value the variable has that will be printed
for(var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}

//Snippet 6 - let in loop (fix)
// here let will create new variable for new values and stores each variable separately
for(let j = 0 ; j < 3; j++){
    setTimeout(() => console.log(j), 100);
}

//Snippet 7 - const behaviour
// const can be assigned only once , throws error on reassignment.
// k holds rhe value directly. reassigning means changing what's in k
//const blocks that
//const k = 10;
//k = 5;
//console.log(k);

// we can mutate an object decalred with const
//details holds a reference(memory address) to the object
// the reference never chnages.
// but the object sitting at the address can be freely modified
const details = {name : "arvind", age : 24} 
details.name = "mani";
console.log(details.name);


// Snippet 8 — global scope
// j is declared outside any function — it lives in global scope
// functions can access variables from outer scopes
let j = 90;
function hello(){
    console.log(j); // 90
}
hello();

//Snippet 9 - scope chain with nested functions
//scope chain lookup - js walks up the chain of parent scopes until it finds the variable or hits global scope

function hey(){
    let i = 20;
    function hola(){
        console.log(i);
    }
    hola();
}
hey();

//Snippet 10 
// var shares same variable suprised me 
for(var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}