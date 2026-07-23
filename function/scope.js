let x = 10  // global variable -> can be access or use anywhre

console.log(x)

const show = () => {
    const y = 20  // local variable -> can only be used inside block
    console.log(x)
    console.log("Y:",y)
}

show()

// console.log("Y:",y) -> throws error because y is inside function