// {} - Object Literal syntax
// [] - Array Literal Syntax

var person = new Object();
person['id'] = 1
person['firstName'] = "Dhaval"
person['lastName'] = "Patidar"
var dhaval = new Object();
person["address"] = dhaval

person["address"]["street"] = dhaval
person["address"]["street"]["state"] = "Some State"
person["address"]["street"] = "1st Main"
person["address"]["state"] = "Canada"
person["address"]["city"] = "Kitchener" 
person["skills"] = ["C#", "Javascript", "Python"]
dhaval["planet"] = "Earth"
console.log(dhaval["planet"])
console.log(person["address"]["street"])
//Passing a value to the parameter
var firstNameProperty = "firstName"
console.log(person[firstNameProperty])
// var person2 = {}
// var person3 = Object.create(null)

console.log(person)
console.log(typeof person["address"])
console.log(typeof person["skills"])
console.log(Array.isArray(person["skills"][0]))
console.log(typeof (person["skills"][0]))

var data = [20, "C#", true]
console.log(data[1], typeof data[1])
// console.log(person2)
// console.log(person3)