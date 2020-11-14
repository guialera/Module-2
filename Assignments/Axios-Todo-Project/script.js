
function getTodo() {
    axios.get("https://api.vschool.io/alexramirez/todo/")
        .then(response => {
            for (let i = 0; i < response.data.length; i++) {
                const h1 = document.createElement("h1")
                h1.textContent = response.data[i].title
                document.getElementById("todoItems").appendChild(h1)

                const id = response.data[i]._id
                console.log(id)

                //const id = document.createElement("h1")
                //id.textContent = response.data[i]._id
                //document.body.appendChild(id)

                const check = document.createElement("input")
                check.setAttribute("type", "checkbox")
                check.value = id
                console.log(check.value)
                h1.appendChild(check)

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

                deleteBtn.style.margin = "5px"

                deleteBtn.addEventListener("click", function (event) {
                    //event.preventDefault()
                    console.log(deleteBtn.value)
                    axios.delete(`https://api.vschool.io/alexramirez/todo/${deleteBtn.value}`)
                        .then(response => console.log(response), alert("Item has been deleted"))
                        .catch(error => console.log(error))
                })

                check.addEventListener("change", function(){
                    const yesCompleted = {
                        completed: true
                    }

                    const noCompleted = {
                        completed: false
                    }

                    if (this.checked){
                        console.log("checked")
                        axios.put(`https://api.vschool.io/alexramirez/todo/${check.value}`, yesCompleted)
                        .then(response => console.log(response), alert("This has been completed"))
                        .catch(error => console.log(error))
                    } else{
                        console.log("not checked")
                        axios.put(`https://api.vschool.io/alexramirez/todo/${check.value}`, noCompleted)
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
        price: todoItems.price.value
    }

    axios.post("https://api.vschool.io/alexramirez/todo/", items)
        .then(response => getTodo(response.data))
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