//-----If var is declared then it will be private--------
// function Sample(){
//     var i= 10;
// }

// Sample()

// console.log(i)

//-----If var is not declared then it will be global--------
// function Sample(){
//      i= 10;
// }

// Sample()

// console.log(i)

var Module =(function(){
    var privateMethod = function(){

    }

    // Below function is still is private method
    //  var publicMethod = function(){

    //  }
    return {
        publicMethod: function(){
            return 'This is Public Method !!!'
        }
    }
})()

console.log(Module)
//We can access the global avriable with the public method 
//But you can't with the private method 
console.log(Module.publicMethod())