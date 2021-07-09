/*
    ? Locally scoped Object Literal, 
    ? 
    ? 

*/

var Module =(function(){
    var privateMethod = function(){
        return 'This is Private Method'
    }
    
    var obj = {}

    obj.someMethod = function(){
        return 'This is again public method'
    }

    return obj
})()

console.log(Module)