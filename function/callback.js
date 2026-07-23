// callback function -> passing one function as argument to another function

const sayHello = (callback) => {
    console.log("Hello")
    callback()
}

const sayGoodBye = () => {
    console.log("GoodBye")
}

sayHello(sayGoodBye)