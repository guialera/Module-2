
function getTodo() {
    axios.get("https://api.vschool.io/alexramirez/todo/")
        .then(response => {
            for (let i = 0; i < response.data.length; i++) {
                if (response.data[i].completed === false) {
                    const h1 = document.createElement("p")
                    h1.textContent = [
                        `Item: ${response.data[i].title}`, ` Price: $${response.data[i].price}`, ` Description: ${response.data[i].description}`
                    ]
                    h1.style.fontSize = "25px"
                    document.getElementById("todoItems").appendChild(h1)

                    const image = document.createElement("img")
                    image.src = response.data[i].imgUrl
                    h1.appendChild(image)
                    image.style.width = "100px"
                    image.style.marginLeft = "20px"

                    const id = response.data[i]._id
                    console.log(id)

                    //const id = document.createElement("h1")
                    //id.textContent = response.data[i]._id
                    //document.body.appendChild(id)

                    const check = document.createElement("input")
                    check.setAttribute("type", "radio")
                    check.setAttribute("name", `choiceButton${response.data[i].title}`)
                    check.value = id
                    console.log(check.value)
                    h1.appendChild(check)
                    check.style.marginLeft = "20px"

                    const completedLabel = document.createElement("label")
                    completedLabel.textContent = "Complete"
                    h1.appendChild(completedLabel)

                    const notCompletedCheck = document.createElement("input")
                    notCompletedCheck.setAttribute("type", "radio")
                    notCompletedCheck.setAttribute("name", `choiceButton${response.data[i].title}`)
                    notCompletedCheck.value = id
                    console.log(notCompletedCheck)
                    h1.appendChild(notCompletedCheck)
                    notCompletedCheck.style.marginLeft = "15px"

                    const notCompletedLabel = document.createElement("label")
                    notCompletedLabel.textContent = "Incomplete"
                    h1.appendChild(notCompletedLabel)

                    const deleteBtn = document.createElement("button")
                    deleteBtn.textContent = "Delete"
                    deleteBtn.value = id
                    console.log(deleteBtn.value)
                    h1.appendChild(deleteBtn)

                    const editBtn = document.createElement("button")
                    editBtn.textContent = "Edit"
                    editBtn.value = id
                    console.log(editBtn.value)
                    h1.appendChild(editBtn)

                    deleteBtn.style.marginLeft = "15px"
                    deleteBtn.style.marginRight = "5px"

                    deleteBtn.addEventListener("click", function (event) {
                        //event.preventDefault()
                        console.log(deleteBtn.value)
                        axios.delete(`https://api.vschool.io/alexramirez/todo/${deleteBtn.value}`)
                            .then(response => console.log(response), alert("Item has been deleted"))
                            .catch(error => console.log(error))
                    })

                    check.addEventListener("change", function () {
                        const yesCompleted = {
                            completed: true
                        }

                        /*const noCompleted = {
                            completed: false
                        }*/

                        if (this.checked) {
                            console.log("Complete Checked")
                            axios.put(`https://api.vschool.io/alexramirez/todo/${check.value}`, yesCompleted)
                                .then(response => console.log(response), alert("This has been completed"))
                                .catch(error => console.log(error))
                        } /*else {
                        console.log("not checked")
                        axios.put(`https://api.vschool.io/alexramirez/todo/${check.value}`, noCompleted)
                            .then(response => console.log(response), alert("This has not been completed"))
                            .catch(error => console.log(error))
                    }*/
                    })

                    notCompletedCheck.addEventListener("change", function () {
                        const noCompleted = {
                            completed: false
                        }

                        if (this.checked) {
                            console.log("Incomplete Checked")
                            axios.put(`https://api.vschool.io/alexramirez/todo/${notCompletedCheck.value}`, noCompleted)
                                .then(response => console.log(response), alert("This has not been completed"))
                                .catch(error => console.log(error))
                        }
                    })

                    /*editBtn.addEventListener("click", function(event){
                        event.preventDefault
                        console.log(editBtn.value)
                        axios.put(`https://api.vschool.io/alexramirez/todo/${editBtn.value}`, newValue)
                        .then(response => console.log(response))
                        .catch(error => console.log(error))
                    })*/
                    /*strikeCheck()*/
                } else if (response.data[i].completed === true) {
                    const h2 = document.createElement("p")
                    h2.textContent = [
                        `Item: ${response.data[i].title}`, ` Price: $${response.data[i].price}`, ` Description: ${response.data[i].description}`
                    ]
                    h2.style.fontSize = "25px"
                    h2.style.textDecoration = "line-through"
                    document.getElementById("todoItems").appendChild(h2)

                    const image = document.createElement("img")
                    image.src = response.data[i].imgUrl
                    h2.appendChild(image)
                    image.style.width = "100px"
                    image.style.marginLeft = "20px"

                    const id = response.data[i]._id
                    console.log(id)

                    //const id = document.createElement("h1")
                    //id.textContent = response.data[i]._id
                    //document.body.appendChild(id)

                    const check = document.createElement("input")
                    check.setAttribute("type", "radio")
                    check.setAttribute("name", `choiceButton${response.data[i].title}`)
                    check.value = id
                    console.log(check.value)
                    h2.appendChild(check)
                    check.style.marginLeft = "20px"

                    const completedLabel = document.createElement("label")
                    completedLabel.textContent = "Complete"
                    h2.appendChild(completedLabel)

                    const notCompletedCheck = document.createElement("input")
                    notCompletedCheck.setAttribute("type", "radio")
                    notCompletedCheck.setAttribute("name", `choiceButton${response.data[i].title}`)
                    notCompletedCheck.value = id
                    console.log(notCompletedCheck)
                    h2.appendChild(notCompletedCheck)
                    notCompletedCheck.style.marginLeft = "15px"

                    const notCompletedLabel = document.createElement("label")
                    notCompletedLabel.textContent = "Incomplete"
                    h2.appendChild(notCompletedLabel)

                    const deleteBtn = document.createElement("button")
                    deleteBtn.textContent = "Delete"
                    deleteBtn.value = id
                    console.log(deleteBtn.value)
                    h2.appendChild(deleteBtn)

                    const editBtn = document.createElement("button")
                    editBtn.textContent = "Edit"
                    editBtn.value = id
                    console.log(editBtn.value)
                    h2.appendChild(editBtn)

                    deleteBtn.style.marginLeft = "15px"
                    deleteBtn.style.marginRight = "5px"

                    deleteBtn.addEventListener("click", function (event) {
                        //event.preventDefault()
                        console.log(deleteBtn.value)
                        axios.delete(`https://api.vschool.io/alexramirez/todo/${deleteBtn.value}`)
                            .then(response => console.log(response), alert("Item has been deleted"))
                            .catch(error => console.log(error))
                    })

                    check.addEventListener("change", function () {
                        const yesCompleted = {
                            completed: true
                        }

                        /*const noCompleted = {
                            completed: false
                        }*/

                        if (this.checked) {
                            console.log("Complete Checked")
                            axios.put(`https://api.vschool.io/alexramirez/todo/${check.value}`, yesCompleted)
                                .then(response => console.log(response), alert("This has been completed"))
                                .catch(error => console.log(error))
                        } /*else {
                        console.log("not checked")
                        axios.put(`https://api.vschool.io/alexramirez/todo/${check.value}`, noCompleted)
                            .then(response => console.log(response), alert("This has not been completed"))
                            .catch(error => console.log(error))
                    }*/
                    })

                    notCompletedCheck.addEventListener("change", function () {
                        const noCompleted = {
                            completed: false
                        }

                        if (this.checked) {
                            console.log("Incomplete Checked")
                            axios.put(`https://api.vschool.io/alexramirez/todo/${notCompletedCheck.value}`, noCompleted)
                                .then(response => console.log(response), alert("This has not been completed"))
                                .catch(error => console.log(error))
                        }
                    })
                }
            }
        })
        .catch(error => console.log(error))

}

getTodo()

const todoItems = document.todo

todoItems.addEventListener("submit", function (event) {
    event.preventDefault()

    clearItems()

    const items = {
        title: todoItems.title.value,
        description: todoItems.description.value,
        price: todoItems.price.value,
        imgUrl: todoItems.imgUrl.value
    }

    axios.post("https://api.vschool.io/alexramirez/todo/", items)
        .then(response => getTodo(response.data), clearForm())
        .catch(error => console.log(error))
})

/*function clearItems() {
    const list = document.getElementById("todoItems")
    while(list.firstChild){
        list.removeChild(list.firstChild)
    }
}*/

function clearItems() {
    const list = document.getElementById("todoItems")
    while (list.childElementCount > 0) {
        list.removeChild(list.firstChild)
    }
}

/*function strikeCheck() {
    console.log("this function works!")
    const list = document.getElementById("todoItems")
    const itemList = list.children
    console.log(itemList)
    for (let i = 0; i < itemList.length; i++) {
        console.log("this works")
        console.log(itemList[i])
    }
}

strikeCheck()*/

function clearForm() {
    todoItems.title.value = ""
    todoItems.description.value = ""
    todoItems.price.value = ""
    todoItems.imgUrl.value = ""
}

/*function strikeCheck(){
    axios.get("https://api.vschool.io/alexramirez/todo/")
    .then(response => {
        for(let i = 0; i < response.data.length; i++){
            if(response.data[i].completed === true){
                console.log("True!")
            } else if (response.data[i].completed === false){
                console.log("False!")
            }
        }
    })
    .catch(error => console.log(error))
}*/

/*function strikeAdded(){
    const h2 = document.createElement("p")
                h2.textContent = [
                    `Item: ${response.data[i].title}`, ` Price: $${response.data[i].price}`, ` Description: ${response.data[i].description}`
                ]
                h2.style.fontSize = "25px"
                h2.style.textDecoration = "line-through"
                document.getElementById("todoItems").appendChild(h2)

                const image = document.createElement("img")
                image.src = response.data[i].imgUrl
                h2.appendChild(image)
                image.style.width = "100px"
                image.style.marginLeft = "20px"

                const id = response.data[i]._id
                console.log(id)

                //const id = document.createElement("h1")
                //id.textContent = response.data[i]._id
                //document.body.appendChild(id)

                const check = document.createElement("input")
                check.setAttribute("type", "radio")
                check.setAttribute("name", `choiceButton${response.data[i].title}`)
                check.value = id
                console.log(check.value)
                h2.appendChild(check)
                check.style.marginLeft = "20px"

                const completedLabel = document.createElement("label")
                completedLabel.textContent = "Complete"
                h2.appendChild(completedLabel)

                const notCompletedCheck = document.createElement("input")
                notCompletedCheck.setAttribute("type", "radio")
                notCompletedCheck.setAttribute("name", `choiceButton${response.data[i].title}`)
                notCompletedCheck.value = id
                console.log(notCompletedCheck)
                h2.appendChild(notCompletedCheck)
                notCompletedCheck.style.marginLeft = "15px"

                const notCompletedLabel = document.createElement("label")
                notCompletedLabel.textContent = "Incomplete"
                h2.appendChild(notCompletedLabel)

                const deleteBtn = document.createElement("button")
                deleteBtn.textContent = "Delete"
                deleteBtn.value = id
                console.log(deleteBtn.value)
                h2.appendChild(deleteBtn)

                const editBtn = document.createElement("button")
                editBtn.textContent = "Edit"
                editBtn.value = id
                console.log(editBtn.value)
                h2.appendChild(editBtn)

                deleteBtn.style.marginLeft = "15px"
                deleteBtn.style.marginRight = "5px"

                deleteBtn.addEventListener("click", function (event) {
                    //event.preventDefault()
                    console.log(deleteBtn.value)
                    axios.delete(`https://api.vschool.io/alexramirez/todo/${deleteBtn.value}`)
                        .then(response => console.log(response), alert("Item has been deleted"))
                        .catch(error => console.log(error))
                })

                check.addEventListener("change", function () {
                    const yesCompleted = {
                        completed: true
                    }

                    /*const noCompleted = {
                        completed: false
                    }*

                    if (this.checked) {
                        console.log("Complete Checked")
                        axios.put(`https://api.vschool.io/alexramirez/todo/${check.value}`, yesCompleted)
                            .then(response => console.log(response), alert("This has been completed"))
                            .catch(error => console.log(error))
                    } /*else {
                        console.log("not checked")
                        axios.put(`https://api.vschool.io/alexramirez/todo/${check.value}`, noCompleted)
                            .then(response => console.log(response), alert("This has not been completed"))
                            .catch(error => console.log(error))
                    }*
                })

                notCompletedCheck.addEventListener("change", function () {
                    const noCompleted = {
                        completed: false
                    }

                    if (this.checked) {
                        console.log("Incomplete Checked")
                        axios.put(`https://api.vschool.io/alexramirez/todo/${notCompletedCheck.value}`, noCompleted)
                            .then(response => console.log(response), alert("This has not been completed"))
                            .catch(error => console.log(error))
                    }
                })

}*/