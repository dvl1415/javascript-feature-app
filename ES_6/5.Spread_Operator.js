/*
    *Spread Operator (...)
*/

const odd = [1,3,5]

//const values = ...odd;

//console.log(typeof (...odd))

const combined = [...odd, 2,4,6]

console.log(combined)

/*
    *Rest Operator (...)
*/

function display(a,b,c, ...args){
    console.log(args)
}

display(1,2,3,4,5,6)