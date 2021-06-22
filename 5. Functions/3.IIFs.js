// // IIF is Immediate Invoke Functions
// //Creation of the IIFs
// var message = "Hello World";
// (function (message){
//     console.log('message')
//     return "hello"
// })(message)

// Immediately Invoked functions

(function (message){
    console.log(message)
})("Hello World");


var display = (function (message){
                return message
              })("Hello World")

console.log(display);

//------This is Using IIF (Do not intefere with the global variables)
var name ='Hey'
console.log(name);

(function hello(){  
     var value = 8; 
     var name ="Hello"
    console.log(name, value)
})()

//-------This is using regular functions
function test(){
    name="Dhaval"
    console.log(name)
}

test()