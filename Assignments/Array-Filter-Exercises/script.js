//1

const numbers = [3, 6, 8, 2]

const greaterThan = numbers.filter(function (num) {
    if (num > 5) {
        return true
    }
})

const greaterThanV2 = numbers.filter(num => num > 5)

console.log(greaterThan)
console.log(greaterThanV2)

//2

const evenNums = numbers.filter(function (num) {
    if (num % 2 === 0) {
        return true
    }
})

const evenNumsV2 = numbers.filter(num => num % 2 === 0)

console.log(evenNums)
console.log(evenNumsV2)

//3

const fiveCharactersOrLess = ["dog", "wolf", "by", "family", "eaten", "camping"]

const characters = fiveCharactersOrLess.filter(function (character) {
    if (character.length <= 5) {
        return true
    }
})

const charactersV2 = fiveCharactersOrLess.filter(character => character.length <= 5)

console.log(characters)
console.log(charactersV2)

//4 

const belongClub = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
] 

const doesBelong = belongClub.filter(function(belong){
    if(belong.member === true){
        return true 
    }
})

const doesBelongV2 = belongClub.filter(belong => belong.member === true)

console.log(doesBelong)
console.log(doesBelongV2)

//5 

const movieAge = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]

const allowed = movieAge.filter(function(canGo){
    if(canGo.age >= 18){
        return true 
    }
})

const allowedV2 = movieAge.filter(canGo => canGo.age >= 18)

console.log(allowed)
console.log(allowedV2)