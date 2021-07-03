var person = {
    firstName: 'Dhaval',
    lastName:'Patidar',
    city:'Kitchener'
}

person.age =45

console.log(person)

/*  
    ! FIRST METHOD
    ? Object.preventExtensions()
    * We can edit and we can delete 
    * But Can not add new properties
*/ 

var preventObject = {
    name: 'DVL',
    City: 'Waterloo',
    age: 25
}

Object.preventExtensions(preventObject)

preventObject.email = "dvl1415@icloud.com"
preventObject.name = "Patel"
delete preventObject.age


console.log(preventObject)

/*  
    ! Second METHOD
    ? Object.seal()
    * We can edit but we can't add 
    * and delete existing properties
*/ 

var sealObject = {
    name: 'Shivam',
    city: 'Port Elgin',
    age:25
}

Object.seal(sealObject)

sealObject.email = "shivam@me.com"
sealObject.name = "Patel"
delete sealObject.age

console.log(sealObject)

/*  
    ! Third METHOD
    ? Object.freeze()
    * We can't edit and we can't add
    * and we can't delete existing properties
*/ 

var freezeObject = {
    name: 'Krina',
    city: 'Vyara',
    age:25,
    address: {
        state: 'Gujarat',
        Street: '11 Sai Vihar Residancy'
    }
}

Object.freeze(freezeObject)
// If we use child object inside freeze we have to freeze them as well 
Object.freeze(freezeObject.address) 

freezeObject.email = "Krina@me.com"
freezeObject.name = "Patel"
delete freezeObject.age;

freezeObject.address.Street =  "12 Sai Vihar Residancy"

console.log(freezeObject)