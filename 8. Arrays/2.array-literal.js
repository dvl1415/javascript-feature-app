// var data = [null, undefined, ,1];

var data = ["C#", "Javascript", "Python"] // Array Literal

data.push("PHP")
data.push("Go")
data.push("SQL Server")

data.unshift("MongoDB")
data.unshift("Postgress")

var numbers = [1, 2, 3, 4, 5]

numbers.push(6)
numbers.unshift(0)

numbers.shift()
numbers.pop()
// data[3] = "PHP"
// data[4] = "Go"

// var length = data.length //[0 to 4]
// if (data.length == length){
//     data[length-1] = "SQL SERVER"
// }

console.log(numbers)
console.log(data)

var months = ['Jan', 'March', 'April', 'June'];
months.splice(2, 1, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]
