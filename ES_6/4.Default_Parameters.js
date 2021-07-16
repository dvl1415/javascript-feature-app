/*
  *Default Parameters    
*/

function say(message){
    console.log(message)
}

// say()

/*
  * ES5 Way of fixing     
*/

function say(message){
    message = typeof message !== 'undefined' ? message : 'Hi'
    console.log(message)
}


/*
  * ES6 Way of fixing     
*/

function say(message = "ES6 Default Value"){
    console.log(message)
}

say('Hello')