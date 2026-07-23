// terniary operator -> shorthand for if-else

const age = 19

if(age >= 18){
    console.log("Adult!")
}else{
    console.log("Minor!")
}

// writing above example using terniary operator
// syntax: condtion ? true statement : false statement

const result = age >= 18 ? "Adult!" : "Minor!"
console.log("Result:",result)


// if tempature is greate than 20 print "Hot!🔥" else print "Cold!🥶"

const temp = 17

const res = temp > 20 ? "Hot!🔥" : "Cold!🥶"
console.log(res)