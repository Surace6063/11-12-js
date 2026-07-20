// 1. if statement
let age = 17

if(age >= 18){
    // only execute if condition is true
    console.log("You can vote.")
}


// 2. if-else statement

if(age >= 18){
    // only execute if condition is true
    console.log("You can vote.")
}else{
    // only execute if condition is false
    console.log("You cannot vote.")
}

// example: check odd or even
let number = 11

if(number % 2 === 0){
    console.log("Even")
}else{
    console.log("Odd")
}

// example 2: age must be greater or equal to 18 and must have id to apply for driving licence

age = 17
const has_id = true

if(age >= 18 && has_id){
    console.log("You are eligible for driving licence.")
}else{
    console.log("You are not eligible for driving licence.")
}

// example 3: apply discount if user is member or has cupon
const isMember = true
const hasCuppon = false

if(isMember || hasCuppon){
    console.log("Discount applied.")
}else{
    console.log("No discount for u.")
}

// example 3: with not operator
const isLoggedIn = false

if(!isLoggedIn){
    console.log("Please login first!")
}