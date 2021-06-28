var person1 = {firstname: 'dhaval', lastname:'patidar'}
var person2 = {firstname: 'cvm', lastname:'patel'}
var person3 = {firstname: 'krina', lastname:'patel'}

function getName(message, city){
    return message + ' to ' + city + this.firstname + ' ' + this.lastname
}

var data1 = getName.call(person1, 'Welcome', 'Canada ')
console.log(data1)

var data2 = getName.call(person2, 'Welcome', 'Canada ')
console.log(data2)

var data3 = getName.call(person3, 'Welcome', 'Canada ')
console.log(data3)