// comparision operator -> compare two values
// return true if condition satisfied else return false

const num1 = 20
const num2 = 30
const num3 = "30"

// 1. equals to
// a. == -> check only value
const res = num1 == num2
console.log("Equal:", res)

const res2 = num2 == num3
console.log("Equal1:", res2)

// b. === -> check both value and data type
const res3 = num1 === num2
console.log("Equal2:", res3)

const res4 = num2 === num3
console.log("Equal3:", res4)


// 2. not equals to
// a. != -> check only value
const res5 = num1 != num2
console.log("Not Equal:", res5)  // true

const res6 = num2 != num3
console.log("Not Equal1:", res6)  // false

// b. !== -> check both value and data type
const res7 = num1 !== num2
console.log("Not Equal2:", res7) // true

const res8 = num2 !== num3
console.log("Not Equal3:", res8)  // false


// 3. Greater than
const greaterThan = num1 > num2
console.log("Greater Than:",greaterThan) // false

// 4. Less than
const lessThan = num1 < num2
console.log("Less Than:",lessThan) // true



// 5. Greater than or equal to
const greaterThanOrEqual = num1 >= num2
console.log("Greater Than or equal:",greaterThanOrEqual) // false


// 6. Less than or equal to
const lessThanOrEqual = num1 <= num2
console.log("Less Than or equal:",lessThanOrEqual) // true