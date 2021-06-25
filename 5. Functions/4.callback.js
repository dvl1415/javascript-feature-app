function sample(val){
    return val ()
}

var value = function(){ return 1}
console.log(sample(value))

// Passing a function as a parameter to another function which is 
// Called callback function