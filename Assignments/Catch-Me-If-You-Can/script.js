//1a and 1b

try {

    function sum(x, y) {
        if (typeof (x) === "number" && typeof (y) === "number") {
            return x + y
        } else if (typeof (x) != "number" || typeof (y) != "number") {
            throw new Error("Not a number!")
            //console.log("This is not a number!")
        }
    }
}

catch (err) {
    console.log(err)
}

const incorrectAddition = sum("1", "2")
const correctAddition = sum(1, 2)

console.log(incorrectAddition)
console.log(correctAddition)

//console.log("This is working!")

//2a and 2b

var user = { username: "Sam", password: "123abc" }

try {

    function login(username, password) {
        if (username === "Sam" && password === "123abc") {
            console.log("Login Successful!")
        } else if (username != "Sam" || password != "123abc") {
            throw new Error("Incorrect username or password entered!")
        }
    }
}

catch (error) {
    console.log(error)
}

login("Sam", "123abc")
login("Sam", "12abc")