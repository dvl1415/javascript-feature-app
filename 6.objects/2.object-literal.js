var person = {}; //Object Literal Syntax

person.firstName = "Adam"
person.lastName = "Colson"
person.address = {};
person.address.street = "1st Main"
person.address.state = "Canada"
person.address.city = "Kitchener"
person.getFullName = function (){
    return person.firstName + ' ' +
           person.lastName + ' ' +
           person.address.state 
}

console.log(person)
console.log(person.getFullName())

//Other way to declare the object literal
var phone = "12345"
var student = {
    firstName:  'Dvl',
    lastName: 'patel',
    getFullName: function (){
        return `Student Details: ${student.firstName} ${student.lastName} ${phone}`
    }
}

console.log(student)
console.log(student.getFullName())

var person2 = {"firstName": 'John', "lastName": 'Wick'}
console.log(person2, typeof person2)

var person3 =JSON.stringify(person2)
console.log(person3, typeof person3)