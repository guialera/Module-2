//1

const numbers = [1, 3, 5, 2, 90, 20]

const leastToGreatestNumbers = numbers.sort(function (a, b) {
    return a - b
})

const numbersV2 = [1, 3, 5, 2, 90, 20]

const leastToGreatestNumbersV2 = numbersV2.sort((a, b) => a - b)

console.log(numbers)
console.log(numbersV2)

//2

const numbersBigToSmall = [1, 3, 5, 2, 90, 20]

const greatestToLeast = numbersBigToSmall.sort(function (a, b) {
    return b - a
})

const numbersBigToSmallV2 = [1, 3, 5, 2, 90, 20]

const greatestToLeastV2 = numbersBigToSmallV2.sort((a, b) => b - a)

console.log(numbersBigToSmall)
console.log(numbersBigToSmallV2)

//3

const stringSize = ["dog", "wolf", "by", "family", "eaten"]

const size = stringSize.sort(function (a, b) {
    return a.length - b.length
})

const stringSizeV2 = ["dog", "wolf", "by", "family", "eaten"]

const sizeV2 = stringSizeV2.sort((a, b) => a.length - b.length)

console.log(stringSize)
console.log(stringSizeV2)

//4

const alphabetOrder = ["dog", "wolf", "by", "family", "eaten"]

const ordered = alphabetOrder.sort() 

const alphabetOrderV2 = ["dog", "wolf", "by", "family", "eaten"]

const orderedV2 = alphabetOrderV2.sort()

console.log(alphabetOrder)
console.log(alphabetOrderV2)

//5

const peopleAge = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]

const age = peopleAge.sort(function (a, b) {
    return a.age - b.age
})

const peopleAgeV2 = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]

const ageV2 = peopleAgeV2.sort((a, b) => a.age - b.age)

console.log(peopleAge)
console.log(peopleAgeV2)