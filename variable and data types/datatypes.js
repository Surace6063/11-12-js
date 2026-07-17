// 1. string -> used to store text
// must be inside "" or '' or ``
const username = "surace"
console.log(typeof username)

// 2. number -> use to store ineteger or float value
const a = 10
const price = 99.99
console.log(typeof price)

// 3. boolean -> contains two value (true or false)
const iAdmin = true
const isVerified = false
console.log(typeof isVerified)

// 4. undefined -> variable is declared but not assign value
let x
console.log(typeof x)

// 5. null -> represent intentional absence of value
const user = null
console.log(typeof user)


// 6. array -> holds multiple data
const hobbies = ["coding","football","gaming"]
const numbers = [10,30,20,40,50]
const mixed_array = ["Suresh",25,false,null]

// 7. object -> used to store complex data
// collection of key-value pairs

const student = {
    id: 101,
    fullName: "Suresh Thapa",
    email: "suresh@gmail.com",
    isVeified: true,
    courses: ["Math","Science","English"],
    address: {
        country: "Nepal",
        city: "Kathmandu",
        zip: 44600
    }
}

// 8. function -> block of code that can be invoke repeatedly
function displayName(){
    console.log("HEllo")
}

displayName()  // HEllo
displayName() // HEllo