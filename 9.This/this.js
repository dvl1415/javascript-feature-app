//'use strict'

console.log(this)
// console.log(window)

var dhaval="Name"
var adhaval = "AnotherName"
var dvl = "His Name"
var cvm ="Another One"
var krina = "Her Name"

function sample(){
    console.log(this)
}

sample()

var b = function(){
    console.log(this)
}

b()

function a(){
    console.log(this)
    this.newVariable ="Hello"
}
a()

console.log(newVariable)

var c = {
    name:'Dhaval', //Property
    log: function(){   //Method
        var self = this;
        self.name = "DVL"
        console.log(self)

        var setName = function(newName){
            self.name = newName
            console.log(self)
        }

        setName('Updated Again')
        console.log(self)
    }
}

c.log()