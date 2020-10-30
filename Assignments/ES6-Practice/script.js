// let and const

let name = "John"
const age = 101

function runForLoop(pets) {
    const petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])

//Task 1

//Without ES6

/*const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(function (carrot) {
        return { type: "carrot", name: carrot }
    })
}

const outcome = mapVegetables(carrots)

console.log(outcome)*/

//With ES6

const carrots = ["bright orange", "ripe", "rotten"]

let mapVegetables = arr => { return arr.map(carrot => { return { type: "carrot", name: carrot } }) }

const outcome = mapVegetables(carrots)

console.log(outcome)

//Task 2

//Without ES6

/*const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(function(person) {
        return person.friendly
    })
}

const filterOutcome = filterForFriendly(people)

console.log(filterOutcome)*/

//With ES6

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

let filterForFriendly = arr => { return arr.filter(person => { return person.friendly }) }

const filterOutcome = filterForFriendly(people)

console.log(filterOutcome)

//Task 3

//Without ES6

/*function doMathSum(a, b) {
    return a + b
}

var produceProduct = function (a, b) {
    return a * b
}

const mathSum = doMathSum(5, 5)

console.log(mathSum)

const product = produceProduct(5, 5)

console.log(product)*/

//With ES6

let doMathSum = (a, b) => a + b

let produceProduct = (a, b) => a * b

const mathSum = doMathSum(5, 5)

console.log(mathSum)

const product = produceProduct(5, 5)

console.log(product)

//Task 4

//Without ES6

/*function printString(firstName, lastName, age){
    console.log(`Hi ${firstName} ${lastName}. How does it feel to be ${age} years old?`)
}

printString("Jane", "Doe", 100)*/

//With ES6

let printString = (firstName, lastName, age) => console.log(`Hi ${firstName} ${lastName}. How does it feel to be ${age} years old?`)

printString("Jane", "Doe", 100)

//Task 5

//Without Shorthand Syntax

/*const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
];

function filterForDogs(arr) {
    return arr.filter(animal => {
        if (animal.type === "dog") {
            return true
        } else {
            return false
        }
    })
}

const filter = filterForDogs(animals)

console.log(filter)*/

//With Shorthand Syntax

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
];

let filterForDogs = (arr) => { return arr.filter(animal => { (animal.type === "dog") ? true : false}) }

const filter = filterForDogs(animals)

console.log(filter)

//Template Literals

let stay = (name, location) => console.log(`Hi ${name}! \nWelcome to ${location}. \nI hope you enjoy your stay. Please ask the president of ${location} if you need anything.`)

stay("Janice", "Hawaii")