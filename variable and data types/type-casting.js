// converting from one data type to another

// 1. converting to number
let num = "10"
console.log(typeof num)

num = Number(num)
console.log(typeof num)

// 2. parseInt -> convert to integer
let price = 99.99

price = parseInt(price)
console.log(`Result: ${price}`)

let length = "102cm"
length = parseInt(length)
console.log(`Length: ${length}`)

// 3. parseFloat -> convert to float or decimal
let x = "10.22kg"
x = parseFloat(x)
console.log(`Result: ${x}`)

// 4. conver to string
let phone = 980000000
phone = String(phone) // amother way: phone = phone.toString()
console.log(typeof phone)

// 5. aything to boolean
let username = "surace"
username = Boolean(username)
console.log(`Resul1: ${username}`)

let user = ""
user = Boolean(user)
console.log(`Resul1: ${user}`)

// number to boolean (return true expect value is 0)
console.log(`Result3: ${Boolean(0)}`) // false
console.log(`Result4: ${Boolean(1)}`) // true