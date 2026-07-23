// a function calling itself

// factorial of 5: 5 * 4 * 3 * 2 * 1

const factorial = (n) => {
   if(n === 1) return 1
   
   return n * factorial(n - 1)
}

const res = factorial(6)
console.log(res)

