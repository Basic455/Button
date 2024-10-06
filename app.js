const button = document.querySelector(".btn")
const body = document.querySelector("body")
const div = document.createElement("div")

function bcg(){
    body.style.backgroundColor = "#ffebcd";
}

function bcgo(){
    body.style.backgroundColor = "#212121";
    div.innerText = "The button clicks"
    body.appendChild(div)
}

button.addEventListener('mousedown', function (e){
    div.innerText = "The button holds"
    body.appendChild(div)
})


window.addEventListener('mouseup', bcgo)
