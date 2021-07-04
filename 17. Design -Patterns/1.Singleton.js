var Singleton = (function(){
    var instance = null;

    var createInstance = function(){
        var obj = Object.create(null)
        console.log('Object has been created')
        return obj;
    }

    return {
        getInstance: function(){
            if(!instance){
                instance = createInstance()
            }
            return instance;
        }
    }
})()

var singleton1 = Singleton.getInstance()
console.log(singleton1)

var singleton2 = Singleton.getInstance()
console.log(singleton2)
