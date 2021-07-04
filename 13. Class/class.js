function Student(){

}

/*

  ? Instance ; Student 1, 2 , 3 is a instance

*/

var student1 = new Student();
console.log(student1)

var student2 = new Student();
console.log(student2)

/*

  ? Constructor ; Student () is a constructor

*/

var student3 = new Student() // Student() is a constructor

/*

  ? Properties

*/

function  Customer (firstName, lastName) {
    this.fname = firstName;
    this.lname = lastName
}

var customer1 = new Customer('Dhaval', 'Patidar')
console.log(customer1)

/*

  ? Method

*/

function Product(name, code ){
    this.name = name 
    this.code = code
    // this. getProductDetails = function(){
    //     // return this.name + ' ' + this.code
    //     return `The product is ${this.name} 
    //     and \n the code is ${this.code}`
    // }
}

Product.prototype.getProductDetails = function(){
    return `The product is ${this.name} and the code is ${this.code}`
}

var product1 = new Product('Laptop', 'LPTP')
console.log(product1)
console.log(product1.getProductDetails())


function Person(){
    this.name = 'Dvl'
    this.gender = 'Male'
}

Person.prototype.age = 15


var personObject1 = new Person()
personObject1.age = 15;
console.log(personObject1.age)

var personObject2 = new Person()
console.log(personObject2.age)


/*

   ! Literal Syntax is just use  { }
   ! Constructor Syntax : function name(){ } and after 
   ! that use  'new' keyword 

*/

function Order(code, name){
  this.code = code 
  this.name = name 
}

Order.prototype.getOrderDetails  = function(){
  return `Order Details- Order Name : ${this.name}, 
                          Order Code: ${this.code}`
}

Order.prototype.city = "Kitchener"

var order1 = new Order("ABC", "Desktop")
order1.city = "Waterloo"
console.log(order1)
var order2 = new Order("AAA", "Laptop")
order2.city = "Cambridge"
console.log(order2)
var order3 = new Order("BBB", "IPAD")
order3.city = "Guelph"
console.log(order3)