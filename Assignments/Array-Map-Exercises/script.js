//1

const initialNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const doubleNumbers = initialNumbers.map(function (num) {
    return num * 2
})

console.log(doubleNumbers)

//2

const stringNumbers = initialNumbers.map(function (num) {
    return num.toString()
})

console.log(stringNumbers)

//3

const names = ["susan", "tim", "BILL", "taMmY", "lUKe"]

const upperCaseFirst = names.map(function (names) {

    const upperCase = names.charAt(0).toUpperCase()
    return upperCase + names.slice(1).toLowerCase()

})

console.log(upperCaseFirst)

//4

const nameAge = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

const namesOnlyString = nameAge.map(function (namesOnly) {
    return namesOnly.name
})

console.log(namesOnlyString)

//5 

const permission = nameAge.map(function (permission) {
    if (permission.age > 18) {
        return permission.name + " can go to the Matrix."
    } else if (permission.age <= 18) {
        return permission.name + " is under age!!"
    }
})

console.log(permission)

//6

const objectsTags = nameAge.map(function (tags) {

    //const h1Tag = document.createElement("h1")
    //const h2Tag = document.createElement("h2")

    //h1Tag.textContent = tags.name
    //h2Tag.textContent = tags.age

    //const h1Name = document.getElementById("main").append(h1Tag)
    //const h2Age = document.getElementById("main").append(h2Tag)

    //const allTags = (h1Tag, h2Tag)

    //console.log(h1Tag, h2Tag)

    //return (allTags)

    return "<h1>" + tags.name + "</h1><h2>" + tags.age + "</h2>"

})

console.log(objectsTags)