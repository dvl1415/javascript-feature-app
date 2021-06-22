// //This is anonymous fucntion creation
// var getName = function (){

// }

//Anonymous Function creation without parameters
var getName =function (){
    var a = 1;
    var b = 2;
    var c = a+b;
    var name = "Dhaval";
    return c+name;
}

var name =  getName();
console.log(name)

//Anonymous function with passing parameters
var getData = function (number1, number2, fullname){
    var value1 = number1;
    var value2 = number2;
    var total = value1+value2;
    var name = fullname;
    return total+name;
}

var data = getData(1,2, "Dhaval")
console.log(data)

//function with name
var getMessage = function display() {
    return "This is Javascript tutorial"
}

var message = getMessage()
console.log(message)

// var message1 = display();
// console.log(message1)

var display = function (){
    //return "hello"
    //return 1
    //return undefined
    return null
    {
        name: 'Johngalt'
    }
}

console.log(display())

/* Example of function return values  */

function userData1(){
    return 
    {
        message: 'Hello World'
    }
}

function userData2(){
    return {
        message: 'Hello World'
    }

    // below code will not be executed 
    // as compiler will ignore all the code
    // written below return 
    return "Hello"
    return "Hey"
}

console.log(userData1())
console.log(userData2())