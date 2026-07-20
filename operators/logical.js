// 1. AND operator (&&) -> return true if all condition is true else return false
const isLoggedIn = true
const isVerified = true
const isAdmin = false

const res = isLoggedIn && isVerified
console.log("AND:",res)

const res1 = isLoggedIn && isVerified && isAdmin
console.log("AND 1:",res1)

// example
const age = 17
const has_id = true

const eligiblity = age >= 18 && has_id
console.log("Is Eligible:",eligiblity)


// 2. Or operator (||) -> return false if all condition is false else return true

const res3 = isLoggedIn || isVerified
console.log("OR:",res3)

const res4 = isLoggedIn || isVerified || isAdmin
console.log("OR 2:",res4)

// example
let day = "Saturday"

const isWeekend = day === "Saturday" || day === "Sunday"
console.log("Is Weekend:",isWeekend)


// 3. Not operator (!) -> convert true to false and vice-versa
console.log("NOT 1:", !isLoggedIn)
console.log("NOT 2:", !isAdmin)