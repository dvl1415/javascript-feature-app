// //Creation of function
// function getName(){

// }

// //Invoke of the function
// var name = getName()
// console.log(name)
// // By default function return the undefined unless you specify what to return

//Regular function without parameters
function getName(){
    var a = 1;
    var b = 2;
    var c = a+b;
    var name = "Dhaval";
    return c+name;
}

var name =  getName();
console.log(name)

//Regular function with passing parameters
function getData(number1, number2, fullname){
    var value1 = number1;
    var value2 = number2;
    var total = value1+value2;
    var name = fullname;
    return total+name;
}

var data = getData(1,2, "Dhaval")
console.log(data)

var data = getData(1, 2, "John")
console.log(data)


function display(param1, param2){
    return param1 + param2
    return
}

var displayMessage = display("dhaval");
console.log(displayMessage)

function isEven(number){
    return (number%2 == 0)
}

console.log(isEven(2))
console.log(isEven(3))