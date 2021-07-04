function Shape(){

}

Shape.prototype.draw = function(){
    return "I am generic Shape"
}

// Circle

function Circle(){

}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.draw = function(){
    return "I am a circle"
}

// Square

function Square(){

}

Square.prototype = Object.create(Shape.prototype)
Square.prototype.draw = function(){
    return "I am a square"
}

// Triangle

function Triangle(){ 

}

Triangle.prototype = Object.create(Shape.prototype)
Triangle.prototype.draw = function(){
    return "I am a triangle"
}

var shapes = [new Shape(), new Circle(), new Square(), new Triangle()] 

shapes.forEach(function(shape){
    console.log(shape.draw())
})