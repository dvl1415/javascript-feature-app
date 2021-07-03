function Person(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
}

Person.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName
}

function Student(age){
    this.age = age
}

//Inherit the Properties from SuperType 
//(Main Magic is working here i.e. Accessing the parent from the 
// child by writing prototype and then child function can access
//                 the parent variable )
Student.prototype = new Person('Dhaval', 'Patidar');

Student.prototype.getAge = function(){
    return this.age;
}

var student = new Student(41);
console.log(student.firstName)
console.log(student.lastName)
console.log(student.age)
console.log(student.getFullName())
console.log(student.getAge())