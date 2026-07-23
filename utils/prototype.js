//part1 - creating object with object.create()
const animal = {
    breathe() {
        console.log("breathing...")
    }
}

const dog1 = Object.create(animal)
dog1.name = "Bruno"
dog1.breathe()
console.log(Object.getPrototypeOf(dog1) === animal)

//part2 - creating creating using class extends

class Animal {
    constructor(name){
        this.name = name
    }

    breathe() {
        console.log(`${this.name} is breathing...`)
    }
}

class Dog extends Animal {
    constructor(name,breed) {
        super(name)
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} says woof`);
    }
}

const dog2 = new Dog("Bruno","Beagle")
dog2.breathe()
dog2.bark()
console.log(dog2 instanceof Animal)
console.log(Dog.prototype.__proto__ === Animal.prototype)

