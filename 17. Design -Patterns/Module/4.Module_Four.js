/*
    ? Stacked Locally scoped Object Literal, 
    ? 
    ? 

*/

var Module =(function(){
    var privateMethod = function(){
        return 'This is Private Method'
    }
    
    var obj = {

        publicMethod: function(){
            return 'This is Public Method !!!'
        },
        someMethod:function(){
            return 'This is Some Method'
        },
        anotherMethod:function(){
            return 'This is Another Method'
        }

    }

    return obj
})()

console.log(Module)