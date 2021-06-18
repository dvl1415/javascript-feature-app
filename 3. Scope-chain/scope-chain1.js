function b(){
    console.log(myvar)
}

function a(){
    var myvar = 2;  // In the fucntion if we use the var before the variable declaration it will become private
                    // so the output will be a 1 for printing, after that if we take out var then it becomes and it will overwrite myvar value with the 2
    b()
}

var myvar = 1;
a()