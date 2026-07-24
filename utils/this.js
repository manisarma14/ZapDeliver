//rule-1 Default Binding - global
// when a function is called without any object 
// this = global object
function hello(){
    console.log(this)
}
try{
    hello()
}catch(e){
    console.log("Error Message: ",e.message)
}


// Rule 2 — Implicit Binding
// when a function is called with dot notation (user.greet())
// this = current object

const user = {
    name : "Mani",
    greet() {
        console.log(this.name)
    }
}
user.greet()


// Rule 3 — Explicit Binding (bind/call/apply)
// bind locks this to a specific object permanently
// this = object you pass to bind
const animal = {
    name: "Dog",
    bark() {
        console.log(this.name)
    }
}
const fn = animal.bark.bind(animal)
fn()

// Rule 4 — Arrow Function
// arrow functions don't have their own this
// they inherit this from where they were written (enclosing scope)
// this = person1 (inherited from greets() method)
const person1 = {
    name: "Rahul",
    greets() {
        setTimeout(() => {
            console.log(this.name)
        },100)
    }
}
person1.greets()