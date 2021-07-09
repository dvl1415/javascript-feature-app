/*
    ? Revealing Module Pattern
    ? 
    ? 

*/

var Module =(function(){
    var privateMethod = function(){
        return 'This is Private Method'
    }
    
    var someMethod = function(){
        return "This is Some Method"
    }

    var anotherMethod = function(){
        return "This is Another Method"
    }

    return {
        key: 'value',
        method1: someMethod,
        method2:anotherMethod
    }

})()

console.log(Module)
console.log(Module.method1)
console.log(Module.method2)