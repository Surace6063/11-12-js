// 1. basic function
function displayInfo(){
    console.log("My name is Suresh Thapa and age is 25.")
}

// calling above function
displayInfo()
displayInfo()
displayInfo()

// 2. function with parameters
function showInfo(name,age){
    console.log(`Name: ${name} and Age: ${age}`)
}

showInfo("Suresh Thapa",25)
showInfo("John Thapa",23)

// sum of two numbers
function calculateSum(a,b){
    const result = a + b
    console.log("Result:",result)
}

calculateSum(10,20)
calculateSum(20,30)

// 3. function with default parameter
function calculateTotal(price,discount = 0.1){
    const res = price - (price * discount)
    console.log("Total:",res)
}

calculateTotal(100)
calculateTotal(200)
calculateTotal(100,0.2)

// 4. function with return type

function calculateDivide(x,y){
    return x / y   // return result 
}

const res1 = calculateDivide(10,2)
console.log("Res1:",res1)


// 5. function expression
const sum = function(a,b){
    return a + b
}

console.log("Sum:", sum(10,20))


// 6. arrow function
// dont need to write return and curly bracket if function contains one line of code
const calculateDivision = (a,b) =>  a / b

const result = calculateDivision(30,15)
console.log("Result:", result)