function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}

const counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1()); 
console.log(counter1());
console.log(counter2()); 

//pattern1 - once(fn)
// a function that can only be called once. After the first call, it returns the same result every time

function once(fn){
    let called = false;
    let result;

    return function(){
        if(called){
            return result;
        }
        else{
            result = fn();
            called = true;
            return result;
        }
    }
}

const sayHello = once(() => {
    console.log("Hello!");
    return "done";
});

console.log(sayHello());
console.log(sayHello());
console.log(sayHello());

//pattern2 - memoize
//caching -> once fetched result , store in cache , and next time return that if same function is called .
function memoize(fn) {
    let cache = {};

    return function(n) {
        if (n in cache){
            return cache[n];
        }
        else {
            cache[n] = fn(n);
            return cache[n];
        }
    }
}

const slowSquare = memoize((n) => {
    console.log("calculating...");
    return n * n;
});

console.log(slowSquare(5));
console.log(slowSquare(5));
console.log(slowSquare(3));
console.log(slowSquare(3));

//pattern3 - createModule
function createModule() {
    let balance = 0

    return {
        deposit: function(amount) {
            balance += amount;
        },
        withdraw: function(amount) {
            if(balance >= amount) {
                balance -= amount;
            }
            else{
                console.log("Insufficient Balance");
            }
        },
        getBalance: function(){
            return balance;
        }
    }
}

const account = createModule();
account.deposit(100);
account.deposit(50);
console.log(account.getBalance());
account.withdraw(30);
console.log(account.getBalance());
account.withdraw(200);
console.log(account.getBalance());
console.log(account.balance);