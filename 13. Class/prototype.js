function Student(){
    this.name = "DVL"
    this.gender = "Patel"
}

var stuObj = new Student();
console.log(Student.prototype)
console.log(stuObj.prototype)
console.log(stuObj.__proto__)

console.log(typeof Student.prototype)
console.log(typeof stuObj.__proto__)
console.log(Student.prototype === stuObj.__proto__)