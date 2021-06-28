var person1 = {firstname: 'dhaval', lastname:'patidar'}
var person2 = {firstname: 'cvm', lastname:'patel'}
var person3 = {firstname: 'krina', lastname:'patel'}

function getName(message, city){
    return message + ' to ' + city + this.firstname + ' ' + this.lastname
}

var fullname1 = getName.bind(person1)
console.log(fullname1('Welcome', 'Canada '))

var fullname2 = getName.bind(person2)
console.log(fullname2('Welcome', 'Canada '))

var fullname3 = getName.bind(person3)
console.log(fullname3('Welcome', 'Canada '))
