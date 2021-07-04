/*

  ? Try-Catch-Finally

*/

try{
    //Code that may throw errors
} catch(ex) {
    //Code will be executed if there is any erros
} finally {
    //Code to be Executed regardless of an error
}

try {
    var output =  getMessage('Hello' , 'Dhaval')
} catch(ex) {
    console.log(ex)
} finally {
    console.log('This will get executed always !!!')
}

//Throw

try{
    throw "Error Occured"
} catch(ex) {
    console.log(ex)
}

//Error with detail description, throw can be used at any where but 
// it is effective to use the throw inside the try

try{
    throw{ number:101, message: 'Duplicate ID'}
} catch(ex) {
    console.log(ex.number, ex.message)
}

try {
    var array =[2,5,3,7,4,8]
    var addNumber=0;
    for(var i=0; i<8; i++){
        if(typeof array[i] === "number"){
            addNumber = addNumber + array[i]
        }
    }
    console.log(addNumber)

} catch(ex){

}