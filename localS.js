let form = document.querySelector("form");
let inputs = document.querySelectorAll('input');
let button =document.querySelector('button')

document.addEventListener('DOMContentLoaded', () => {
    getFromLocalS();

    form.addEventListener('input', () => {
        saveToLocalS();
    })
})

function saveToLocalS(){
    inputs.forEach((elem) => {
        localStorage.setItem(elem.id, elem.value)
        console.log(elem.value)
    })
}

function getFromLocalS(){
    inputs.forEach((elem) => {
        elem.value = localStorage.getItem(elem.id)
        console.log(elem.value)
    })
}

button.addEventListener('click', ()=>{
    inputs.forEach((elem) => {
        localStorage.removeItem(elem.value)
    })

})

function clearLS(){
    localStorage.clear()
}