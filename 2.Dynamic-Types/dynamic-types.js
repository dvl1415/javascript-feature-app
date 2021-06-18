var a = 10;
    a = "hello"
    a = true
    a = undefined
    a = null
    a = fucntion()
    a = {name: 'value'}
    a = ["red", "blue", "yellow"]
    a = new Date()

    var obj ={
        city: 'hyderbad',
        id:1,
        items: ["doors", "windows"],
        student: {id:1, name:'dhaval'}
    }

    console.log(obj)
//Regular Function
function display(){

}

console.log(display())
//anonyms fucntion /function expression
var display = function(){

}

//Immediate Invoke Function
var test = (function(){
    return "hello"
})()
console.log(a, typeof a)