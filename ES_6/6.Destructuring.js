/*
    *Destructuring 
*/

let arr = ["Scott", "Adam", "Tuan", "DVL"]
let [name1, name2, name3, name4] = arr;

console.log(name1, name2, name3, name4)

/*
    ! Split() 
*/

let [firstName, lastName] = "Dhaval Patidar".split(' ')
console.log(firstName, lastName)

let [fName, lName, title] = ["DVL", "Patel", "Krina"]
console.log(title) // Krina

/*
    ! Using Objects
*/

let user = {
    name : 'John',
    age:30
}

let {name, age} = user;
console.log(name, age)