var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

const filteredArr = peopleArray.filter(function (person) {
    if (person.age > 18) {
        return true
    }
})

console.log(filteredArr)

const sortedArr = filteredArr.sort(function (a, b) {
    if (a.lastName < b.lastName) {
        return -1
    }
    if (a.lastName > b.lastName) {
        return 1
    }
    return 0
})

console.log(sortedArr)

const editedPeopleArr = sortedArr.map(function (people) {
    return "<li>" + people.firstName + " " + people.lastName + " is " + people.age + "</li>"
})

console.log(editedPeopleArr)

//Extra Credit 

var newPeopleArr = [{
    firstName: "BoJack",
    lastName: "Horseman",
    age: 40
},
{
    firstName: "Miss",
    lastName: "Moneypenney",
    age: 45
}]

const additionalPeopleArr = peopleArray.concat(newPeopleArr)

console.log(additionalPeopleArr)

const lastNameLetters = additionalPeopleArr.filter(function (lastLetter) {
    if (lastLetter.lastName.slice(-1) === "y" || lastLetter.lastName.slice(-1) === "a") {
        return false
    } else return true
})

console.log(lastNameLetters)

const secondRemoved = lastNameLetters.filter(function (people) {
    if (lastNameLetters.indexOf(people) === 1) {
        return false
    } else return true
})

console.log(secondRemoved)

const reversedArr = secondRemoved.reverse()

console.log(reversedArr)