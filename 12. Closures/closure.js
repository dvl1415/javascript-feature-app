// function sample(){
//     return function(){

//     }
// }

// console.log(sample())

function greet(message){
    return function(name){
        console.log(message + ' ' + name)
    }
}

var wish = greet('Good Morning')
console.log(wish)

var sayHello = wish('Dhaval') // Greet is already executed

var welcome = greet ('Good Morning') ('Dhaval')