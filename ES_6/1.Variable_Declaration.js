/*
    ? var - If function scoped
    ? Let, Const - Block scoped

*/


// Function Scoped
var color = "Red"
function sample(){
    var color = "blue" // Function Scoped Variable
    console.log(`Color Inside the function: `,color)
    if(true){
        var foo = "Hello"
    }
}
console.log(`Color Outside the function: `,color)
sample()

/*
    ! Block Scoped
    ?Let value can be re-assigned
    ? Const value can't be re-assigned
    ?Only Exception is Object Data Type

*/

function display(){
    if(true){
        var name = "Dhaval" ;
        let city = "Boston"; // Block Scoped
        const state = "MA" // Block Scoped
    
        console.log(name)
        console.log(city)
        console.log(state)
    }
    
    // console.log(name)
    // console.log(city)
    // console.log(state)
}
display()

// Var Outside of the for-loop
// for(var i=0; i<3; i++){
//     console.log(i)
// }
// console.log(`The value of i is : `, i)

//Let outside of for-loop
// for(let i=0; i<3; i++){
//     console.log(i)
// }
// console.log(`The value of i is : `, i)

// Re-Defining Let, It will not allow to 
// redeclare same thing again

// function reDefine(){
//     let foo = 1;
//     foo = 10;

//     let foo = 101
//     console.log(foo)
// }

const data = [1,2,3,4]
data.push(4)
console.log(data)

const obj = {name: 'Dvl', city: 'Kitchener'}
obj.age = 24;
obj.country = 'India'

//obj={state: 'ON'}
console.log(obj)

let sum =  0;

sum = sum + 1

console.log(sum)

let x;
x = 0;

console.log(x)

let sum;
sum = sum + 1
console.log(sum)

let c;
let a=5;
let b=6;
c =a+b;
console.log(c)

let sum;
sum = sum +1
console.log(sum)