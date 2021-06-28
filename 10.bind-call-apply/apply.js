var person1 = {firstname: 'dhaval', lastname:'patidar'}
var person2 = {firstname: 'cvm', lastname:'patel'}
var person3 = {firstname: 'krina', lastname:'patel'}

function getName(message, city){
    return message + ' to ' + city + this.firstname + ' ' + this.lastname
}

var content1 = getName.apply(person1, ['Welcome' , 'Canada '])
console.log(content1)

var content2 = getName.apply(person2, ['Welcome' , 'Canada '])
console.log(content2)

var content3 = getName.apply(person3, ['Welcome' , 'Canada '])
console.log(content3)