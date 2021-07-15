/*
 ! Fat Arrow Function
 ? Steps to create the fat-arrow function
    ? FAF doesn't contain function keyword
    ? should have fat arrow between parenthesis and flower bracket
*/

let add = (a,b) => { // FAF
     return a + b;
}

console.log(add(1,6))

let sum = (a,b) => a + b; // FAF

console.log(sum(5,6))

/*
  ! However, If you use the block syntax you need to 
  ! Specify the 'return' Keyboard
  ? () => Expression 
  ? () => {return expression}
  ? Both Declaration are Equal
*/
let sub = (a,b) => {return a - b}; // FAF
console.log(sub (6,5))

/*
  ! Creating IIF using FAF 
*/

var x = (() => {
    return "This is IIF Using FAF"
})()

console.log(x)

let numbers1 = [4,2,6]
numbers1.sort(function(a,b){
    return a-b
})

console.log(numbers1)

let numbers2 = [4,2,6]
numbers2.sort((a,b) =>{
    return a-b
})

console.log(numbers2)


/*
  ! All assignments are equal 
  ? (parameter) => statement
  ? parameter => statement 
  ? Above both are equals
*/
let message1 = (msg) => msg + " DVL"
console.log(message1('Hello'))

let message2 = msg => msg + " DVL"
console.log(message2('Hello'))

let message3 = msg => msg 
console.log(message3('Hello'))

let names = ["Dhaval", "Patel", "Krina"]
let lengths = names.map(name => name.length)

console.log(lengths)

// With No parameters
let log = (name) => console.log(window.document)
log()

// //Line Break
// /*
//     ! Below will give you the syntax error
// */
// let multiply = (x,y)
// => x*y

/*
    ! Below will not give you the syntax error
*/
let multiply = (x,y) => 
x*y

console.log(multiply(2,3))