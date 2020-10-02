//Addition 

const submitAddButton = document.getElementById("submitAddBtn")
const clearAddButton = document.getElementById("clearAddBtn")
const addition = document["addCalculator"]

submitAddButton.addEventListener("click", function(event){
    event.preventDefault()

    const num1 = Number(addCalculator.addFirstNumber.value)
    const num2 = Number(addCalculator.addSecondNumber.value)

    //addition.addFirstNumber.value = ""
    //addition.addSecondNumber.value = ""

    const finalNumber = add(num1 , num2)

    console.log(finalNumber)

    const addResult = document.createElement("p")
    addResult.textContent = "The result is " + finalNumber + "."
    document.getElementById("add").append(addResult)
    addResult.style.fontSize = "20px"

    clearAddButton.addEventListener("click", function(event){
        event.preventDefault()
        addResult.remove()
        addition.addFirstNumber.value = ""
        addition.addSecondNumber.value = ""
    })
    
})

function add(num1, num2){
    return num1 + num2
}

//Subtraction

const submitSubButton = document.getElementById("submitSubBtn")
const clearSubButton = document.getElementById("clearSubBtn")
const subtract = document["subCalculator"]

submitSubButton.addEventListener("click", function(event){
    event.preventDefault()

    const num1 = Number(subCalculator.subFirstNumber.value)
    const num2 = Number(subCalculator.subSecondNumber.value)

    //subtract.subFirstNumber.value = ""
    //subtract.subSecondNumber.value = ""

    const finalNumber = sub(num1 , num2)

    console.log(finalNumber)

    const subResult = document.createElement("p")
    subResult.textContent = "The result is " + finalNumber + "."
    document.getElementById("sub").append(subResult)
    subResult.style.fontSize = "20px"

    clearSubButton.addEventListener("click", function(event){
        event.preventDefault()
        subResult.remove()
        subtract.subFirstNumber.value = ""
        subtract.subSecondNumber.value = ""

    })
    
})

//Multiply

const submitMulButton = document.getElementById("submitMulBtn")
const clearMulButton = document.getElementById("clearMulBtn")
const multiply = document["mulCalculator"]

submitMulButton.addEventListener("click", function(event){
    event.preventDefault()

    const num1 = Number(mulCalculator.mulFirstNumber.value)
    const num2 = Number(mulCalculator.mulSecondNumber.value)

    //multiply.mulFirstNumber.value = ""
    //multiply.mulSecondNumber.value = ""

    const finalNumber = mul(num1 , num2)

    console.log(finalNumber)

    const mulResult = document.createElement("p")
    mulResult.textContent = "The result is " + finalNumber + "."
    document.getElementById("mul").append(mulResult)
    mulResult.style.fontSize = "20px"

    clearMulButton.addEventListener("click", function(event){
        event.preventDefault()
        mulResult.remove()
        multiply.mulFirstNumber.value = ""
        multiply.mulSecondNumber.value = ""
    })
    
})

function add(num1, num2){
    return num1 + num2
}

function sub(num1, num2){
    return num1 - num2
}

function mul(num1, num2){
    return num1 * num2
}