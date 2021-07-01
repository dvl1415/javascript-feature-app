var name = 'Scott'

if(name=='Scott'){
    console.log('Hey, Scott, how are you?')
} else {
    console.log('Hey, Seems like a different Names')
}


//Other way to write the if-else loop
var message = "Hello"

if(message=="Hello") console.log('Yeah, Thats the Message!!!!')

var count = 60;

if(count == 50) {
    console.log('Student grades have been less')
} else if (count == 70) {
    console.log('Student grades have been average')
} else if (count == 80) {
    console.log('Student grades have been average')
} else if (count == 100){
    console.log('Student grades have been best')
}

var total = 50

if(total == 50){
    var num = 25
    if(num == 25) {
        console.log('Hey I am Inside Nested IF')
    }

}

/*
! Difference between == and === is == just comapare the value and 
! === Compare the value and type both of them 
*/ 

var a = '1'

if(a === 1) {
    console.log('a is always 1')
} else {
    console.log('a is not a number')
}

var firstName = 'John'
var lastName = 'Patel'
var age = 39

if(firstName === 'John' &&
   lastName === 'Patel' && 
   age !== 39){
    console.log('His name is John Patel !!!')
} else {
    console.log('He is a Proxy !!')
}

var newVariable1 = 'Adam'
var newVariable2 = 'Colson'
var newVariable3 = 43

if(newVariable1=='adam' || 
   newVariable2 === 'colson' || 
   newVariable3 === 40) {
       console.log('Welcome Adam, You are home Finally')
} else {
    console.log('He is not Adam')
}

if(firstName === 'john' && (lastName === 'patel' || age === 39)) {
    console.log(`Hey his name is John and he is ${age}`)
} else {
    console.log('I don\'t think he is john')
}

// Back Tick 

var fname = 'Tuan'
var lname = 'Bui'

console.log('fname is '   + fname + ' and lname is ' + lname)
console.log(`fname is ${fname} and  lname is ${lname}`)

// Use of AND operator inside of the console.log
console.log(fname === 'Tuan' && lname === 'Bui')

var x = true
var y = false

if(x) {
    console.log('yeah X')
} else if (y) {
    console.log('yeah Y')
} else {
    console.log('Not X and Y')
}

console.log(x ===true || x === true && y === false)
console.log(true || true && true)

if(20 > 30) {
    console.log('I failed You !!!')
} else if ( 20 > 10 && 20 === 20) {
    console.log('Unfortunately you have Passed')
} else if( 20 === 20 ) {
    console.log ('Seems like there is a tie ')
}

if(10<20) {
    console.log('Hello')
}

var data = ["red", "blue", "yellow"]

for(var i = 0; i < data.length; i++) {
    if(data[i] === 'blue') {
        console.log('There is a blue')
    }
}

var name = "Dhaval"

switch(name){
    case 'Dvl':
        console.log('His name is Dvl')
        break;
    case 'Patel' :
        console.log('His name is Patel')
        break;
    case 'Shivam' :
        console.log('His name is Shivam')
        break;
    case 'Dhaval' :
        console.log('His name is Dhaval')
        break;
    default:
        console.log('Guys you don\'t know his name ?')
        break;
}

var text = "";
var i;
for(i=0; i<=5; i++){
    if( i === 3 ){
        continue;
    }
    text = text + "The Number is " + i + "\n";
}

console.log(text)


// USe of While Loop
var n = 0;

while ( n < 3 ){
    n++;
}

console.log(n);
//Exopected output:3