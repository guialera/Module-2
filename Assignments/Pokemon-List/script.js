const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const jsonData = xhr.responseText
        const data = JSON.parse(jsonData)
        const secondData = data.objects[0] 

        showPokemon(secondData.pokemon)

        console.log(jsonData)
        console.log(data.objects)
    }
}

function showPokemon(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log("this works")
        const h1 = document.createElement("h1")
        h1.textContent = arr[i].name
        document.body.appendChild(h1)
    }
}

xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send()