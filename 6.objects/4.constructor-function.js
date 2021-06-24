function Student(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function(){
        return this.firstName + ' ' + this.lastName
    }    
}

Student.prototype.fullName = function(){
    return this.firstName + ' ' + this.lastName
}

var student1 = new Student('Scott', 'Patel')
console.log(student1)
console.log(student1.firstName)
console.log(student1.lastName)
console.log(student1.fullName())

var student2 = new Student('John', 'Wick')
console.log(student2)

var student3 = new Student('Cvm', 'Patel')
console.log(student3)

// function display(){

// }

// var output = display()
// console.log(output)