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