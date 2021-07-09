/*
    ? Anonymous Object Literal, As for the public method we don't 
    ? have any object name so that's why it's called anonymous
    ? Object literal

*/

var Module =(function(){
    var privateMethod = function(){

    }
    return {
        publicMethodOne: function(){
            return 'This is Public Method One!!!'
        },
        publicMethodTwo: function(){
            return 'This is Public Method Two!!!'
        },
        publicMethodThree: function(){
            return 'This is Public Method Three!!!'
        }
    }
})()

console.log(Module)
console.log(Module.publicMethodOne())
console.log(Module.publicMethodTwo())
console.log(Module.publicMethodThree())