const btn = document.getElementById("btnClicks")

let btnNumberClicks = 0

btn.addEventListener("click", function (event) {
    event.preventDefault()

    if (refreshNumber > 0) {
        btnNumberClicks = refreshNumber
    } else (btnNumberClicks += 1)

    refreshNumber += 1

    console.log(btnNumberClicks)

    const clicks = btnNumberClicks

    const totalClicks = document.createElement("ul")
    totalClicks.textContent = clicks
    document.getElementById("header").append(totalClicks)

    localStorage.setItem("clicks", clicks)
    //const storedTotalClicks = localStorage.getItem("clicks")
    //backUpClicks = document.createElement("ul")
    //backUpClicks.textContent = storedTotalClicks
    //console.log(storedTotalClicks)
    //document.getElementById("header").append(backUpClicks)

    if (document.getElementsByTagName("ul").length >= 2) {
        //console.log("this works!")
        document.getElementsByTagName("ul")[0].remove()
    }
})

//localStorage.setItem("clicks", clicks)
const storedTotalClicks = localStorage.getItem("clicks")
backUpClicks = document.createElement("ul")
backUpClicks.textContent = storedTotalClicks
document.getElementById("header").append(backUpClicks)

console.log(storedTotalClicks)

let refreshNumber = Number(storedTotalClicks) + 1

const clearBtn = document.getElementById("clearClicks")

clearBtn.addEventListener("click", function (event) {
    event.preventDefault()
    localStorage.removeItem("clicks")
    location.reload()
})