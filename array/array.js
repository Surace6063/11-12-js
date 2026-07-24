// array -> use to store multiple values in a single variable

// array with string data
const fruits = ["apple","mango","orange","banana"]

// array with number data
const numbers = [10,20,40,30,50]

// array with  mixed data types
const mixedArray = ["Suresh Thapa",25,3.24,true]

// empty array
const empty = []



let hobbies = ['coding','treking','football','basketball','cricket']

// 1. accessing a item from array
console.log("First Item:", hobbies[0])
console.log("Third Item:", hobbies[2])
console.log("Last Item:", hobbies[hobbies.length - 1])


// 2. length of array
console.log("Length:", hobbies.length)
console.log("Length:", empty.length)

// 3. adding new item to array
// a. push() -> add item to end of array
hobbies.push('fishing')
console.log("Array after push:", hobbies)

// b. unshift() -> add item to start of array
hobbies.unshift('swimming')
console.log("Array after unshif:", hobbies)

// c. adding to specific position using splice(index,deleteCount,item1,item2)
hobbies.splice(2,0,'dancing','singing')
console.log("Array after add using splice:", hobbies)


// 4. removing item from array
// a. pop() -> remove item from end of array
hobbies.pop()
console.log("Array after pop:", hobbies)

// b. shift() -> remove item from start of array
hobbies.shift()
console.log("Array after shif:", hobbies)

// c. removing from specific position using splice(index,deleteCount,item1,item2)
hobbies.splice(2,2)
console.log("Array after remove using splice:", hobbies)


// 5. slice(startIndex,endIndex) -> return part of an array without changing the orginal
let newArray = hobbies.slice(2,4)
console.log("Sliced Array:", newArray)

// 6. looping through array
let colors = ['red','blue','green','orange','blue']

for(let i = 0; i < colors.length; i++){
    console.log(colors[i])
}

// 7. looping using for...of
for(let item of colors){
    console.log(item)
}

// 8. seraching
// a. includes()
console.log("Find Blue:", colors.includes('blue'))

// b. indexOf() -> returns the first index of a value
console.log("Find Blue Index:", colors.indexOf('blue')) // 1
console.log("Find Unknown Color Index:", colors.indexOf('purple')) // -1

// c. lastIndexOf() -> returns the last index of a value
console.log("Find Blue last Index:", colors.lastIndexOf('blue')) // 4


// 9. join() -> converts an array to a string using a separator
let dob = ['2000','03','28']   // 2000-03-28
console.log("Formatted Date:", dob.join('-'))