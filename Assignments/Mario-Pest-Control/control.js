const pricingForm = document.pricing

const submitPricing = document.getElementById("submitBtn")

const clearPricing = document.getElementById("clearBtn")

submitPricing.addEventListener("click", function (event) {
    event.preventDefault()

    //goomba price total
    const goombaTotal = Number(pricingForm.goombaNumber.value)
    const goombaPrice = Number(goombaTotal * 5)

    //bobombs price total
    const bobombsTotal = Number(pricingForm.bobombsNumber.value)
    const bobombsPrice = Number(bobombsTotal * 7)

    //cheepcheeps price total
    const cheepcheepsTotal = Number(pricingForm.cheepcheepsNumber.value)
    const cheepcheepsPrice = Number(cheepcheepsTotal * 11)

    //alert(goombaPrice + bobombsPrice + cheepcheepsPrice)

    price = goombaPrice + bobombsPrice + cheepcheepsPrice

    const finalPrice = document.createElement("p")
    finalPrice.textContent = "Your total is " + price + " coins!"
    finalPrice.style.fontSize = "50px"
    finalPrice.style.textAlign = "center"
    document.getElementById("form").append(finalPrice)

    clearPricing.addEventListener("click", function (event) {
        event.preventDefault()
        finalPrice.remove()
    })


})