//console.log(document)

var button = document.getElementById("btnClick")
console.log(button)

button.addEventListener('click', function(){
    console.log('Did you click me?')
})

button.addEventListener('mouseover', function(){
    button.style.background = 'blue'
})

button.addEventListener('mouseout', function(){
    button.style.background = 'white'
})

function display(){
    console.log('This is a Display Function ')
}

var button2 = document.getElementById("btnSubmit")
button2.style.background = "crimson"
button2.style.color = "white"

button2.addEventListener('click', function(){
    console.log('This is a submit event')
})

var buttons = document.getElementsByTagName('Button')

var clickButton = buttons[0]
var submitButton = buttons[1]

console.log(clickButton)
console.log(submitButton)

var classButtons = document.getElementsByClassName('btnPrimary')
console.log(classButtons)

console.log(classButtons[0].innerHTML)
console.log(classButtons[1].innerHTML)


console.log(document.getElementsByClassName('btnPrimary')[0].innerHTML)