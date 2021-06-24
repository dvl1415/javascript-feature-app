var people = new Array(3)
people[0] = 1234
people[1] = "Dhaval"
people[2] = "Patidar"
people[3] = true
people[7] = {}
console.log(people)

var fruits = new Array("Oranges", "Apple", "Banana", "Guava")
console.log(fruits)

var vegetables = new Array("Potato", "Tomato", "Spinach", "Onion")
console.log(vegetables)

var allItems = fruits.concat(vegetables)
                     .concat(["Dvl", "patel"])
                     .concat([1,2,3])
console.log(allItems)

var movies = ["Avatar", "Good Will Hunting", "Vanilla Sky", "MARS"]

var movieString = movies.join(",")
console.log(movieString)

var movieSplit = movieString.split(',')
console.log(movieSplit)