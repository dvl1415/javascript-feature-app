/*
    * Template Literals
*/

let simple = 'This is a string'
simple = `This is string using template Literal`

let str = `Template literal in ES6`

console.log(str)
console.log(str.length)
console.log(typeof str)

/*
 ! Using  Single Quote
*/

let anotherString = `Here's a Template Literal`
console.log(anotherString)

/*
 ! String Containing the backtick
*/

let strWithBackTick = `Template Literals use backticks \` instead of quores `
console.log(strWithBackTick)

/*
 ! Multiline Strings (Prior to ES6)
*/

var msg = 'Multiple \n\ String'
console.log(msg)

/*
 ! Multiline Strings (Using ES6)
*/

let p = `This text 
        can span 
            multiple lines`
 console.log(p)

 /*
 ! Variable and expression Substitutions
*/

let firstName = 'John',
    lastName = 'Galt'

let greeting =  `Hello ${firstName} ${lastName}`
console.log(greeting)