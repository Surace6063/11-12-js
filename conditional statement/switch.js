let day = 4

switch(day){
    case 1:
        console.log("Sunday")
        break
    case 2:
        console.log("Monday")
        break
    case 3:
        console.log("Tuesday") 
        break
    default:
        console.log("Invalid day!")           
}

// example: calculator
const a = 10
const b = 20
const operator = "+"
let result

switch(operator){
    case "*":
        result = a * b
        console.log("Result",result)
        break
    case "+":
        result = a + b
        console.log("Result",result)
        break
    case "-":
        result = a - b
        console.log("Result",result)
        break
    case "/":
        result = a / b
        console.log("Result",result)
        break
    default:
        console.log("Invalid operator.")                       
}