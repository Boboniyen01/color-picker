let userInput = document.getElementById('usercolor')
let Body = document.getElementById('main-body')
function changeColor(){
    Body.style.backgroundColor = userInput.value
}
userInput.addEventListener('input',changeColor )