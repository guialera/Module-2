//1 

//Without ES6

/*function collectAnimals(...animals) {
    return animals.map(function (single) {
        return single
    })
}

const list = collectAnimals("dog", "cat", "mouse", "jackolope", "platypus")

console.log(list)*/

//With ES6

let collectAnimals = (...animals) => { return animals.map(single => { return single }) }

const list = collectAnimals("dog", "cat", "mouse", "jackolope", "platypus")

console.log(list)

//2

//Without ES6

/*function combineFruit(fruit, sweets, vegetables) {
    return {
        fruit,
        sweets,
        vegetables
    };
}

const fruitList = combineFruit(["apple", "pear"],
    ["cake", "pie"],
    ["carrit"])

console.log(fruitList)*/

//With ES6

let combineFruit = (fruit, sweets, vegetables) => { return { fruit, sweets, vegetables } }

const fruitList = combineFruit(["apple", "pear"],
    ["cake", "pie"],
    ["carrit"])

console.log(fruitList)

//3

const vacation = {
    location: "Burly Idaho",
    duration: "2 weeks"
};

const { location, duration } = vacation

let parseSentence = () => { return `We're going to have a good time in ${location} for ${duration}` }

const message = parseSentence(vacation)

console.log(message)

//4 

function returnFirst(items) {
    const [firstItem] = items;
    return firstItem
}

//Extra Practice

/*stuff = ["ice cream", "pencils", "laptop", "juice"]

function returnFirst(items) {
    const [firstItem, whatever, huh, so] = items;
    return [firstItem, whatever, so]
}

const what = returnFirst(stuff)

console.log(what)*/

//5 

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr) {
    const [zeroFav, firstFav, noFav, secondFav, thirdFav] = arr
    return `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}`
}

const favResults = returnFavorites(favoriteActivities)

console.log(favResults)

//6

//Partial ES6

/*function combineAnimals(arrOne, arrTwo, arrThree) {  
    return [...arrOne, ...arrTwo, ...arrThree]
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

const animalArr = combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals); 

console.log(animalArr)*/

//With ES6

let combineAnimals = (arrOne, arrTwo, arrThree) => { return [...arrOne, ...arrTwo, ...arrThree] }

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

const animalArr = combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals);

console.log(animalArr)

//7

/*function product(a, b, c, d, e) {
    var numbers = [a, b, c, d, e];

    return numbers.reduce(function (acc, number) {
        return acc * number;
    }, 1)
}

const math = product(1, 2, 3, 4, 5)

console.log(math)*/

let product = (...data) => { var numbers = [...data]; return numbers.reduce((acc, number) => { return acc * number; }, 1) }

const math = product(1, 2, 3, 4, 5)

console.log(math)

//8

let unshift = (array, a, b, c, d, e) => { return [a, b, c, d, e, ...array]; }

const shows = ["Simpsons", "King of the Hill", "Portlandia", "Bob's Burgers"]

const newArr = unshift(shows, "Susan", "Bob", "Anthony", "Bort", "Phil")

console.log(newArr)

//9 

//Without ES6

/*function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ");
        const firstName = name[0];
        const lastName = name[1];
        return {
            firstName: firstName,
            lastName: lastName
        }
    })
}

const peopleArr = populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])

console.log(peopleArr)*/

//With Shorthand Syntax Only 

/*function populatePeople(names) {
    return names.map(function (name) {
        name = name.split(" ");
        const [firstName, lastName] = name;
        return {
            firstName,
            lastName
        }
    })
}

const peopleArr = populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])

console.log(peopleArr)*/

//With Full ES6 and Shorthand Syntax

let populatePeople = (names) => { return names.map((name) => { name = name.split(" "); const [firstName, lastName] = name; return { firstName, lastName } }) }

const peopleArr = populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])

console.log(peopleArr)