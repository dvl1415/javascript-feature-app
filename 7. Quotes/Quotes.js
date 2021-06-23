var message = "Hello World" + " " + person.lastName // Using Double Quote
var display = 'Show Message to' + ' ' + person.firstName // Using single Quote
var data = `Here is the Data ${person.address.state}
            Hello are you
            This is the another one
            `   // Using the back tick, Advantage of the back tick is 
                // we can put the line break

console.log(message)
console.log(display)
console.log(data)