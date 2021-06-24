var person = Object.create(null)

person.firstName = "Dhaval"
person.lastName = "Patidar"
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


var obj = {
    name: 'johngalt',
    message: 'Who is johngalt ?'
};

var person1 = Object.create(obj)
console.log(person1)
console.log(person1.name)
console.log(person1.message)

var person2 = Object.create({name: 'Shivam Patel', book: 'is a C'})
console.log(person2)
console.log(person2.name)
console.log(person2.book)