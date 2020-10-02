const travelInfo = document.travelForm

//const firstName = travelInfo.firstName.value
//const lastName = travelInfo.lastName.value
//const travelAge = travelInfo.age.value

const submit = document.getElementById("submitBtn")

submit.addEventListener("click", function (event) {
    event.preventDefault()

    const firstName = travelInfo.firstName.value
    const lastName = travelInfo.lastName.value
    const travelAge = travelInfo.age.value
    const gender = travelInfo.gender.value
    const city = travelInfo.destination.value
    //const diet = travelInfo.restrictions.value

    const dietChecked = []

    for (let i = 0; i < travelInfo.restrictions.length; i++) {
        if (travelInfo.restrictions[i].checked) {
            dietChecked.push(travelInfo.restrictions[i].value)
        }
    }

    console.log("First Name: " + firstName + "\n" + "Last Name: " + lastName + "\n" + "Age: " + travelAge + "\n" + "Gender: " + gender + "\n" + "Destination: " + city + "\n" + "Diet: " + dietChecked)
    alert("First Name: " + firstName + "\n" + "Last Name: " + lastName + "\n" + "Age: " + travelAge + "\n" + "Gender: " + gender + "\n" + "Destination: " + city + "\n" + "Diet: " + dietChecked)
})