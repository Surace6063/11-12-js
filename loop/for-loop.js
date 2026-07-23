// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)

// syntax: for(let variable = startvalue; condition; incerment/decrement){}

// for(let i = 1; i < 6; i++){
//     console.log(i)
// }

// // print from 5 to 1
// for(let i = 5; i > 0; i--){
//     console.log(i)
// }

// for loop with break statement
for(let i = 1; i < 6; i++){
    if(i === 3) break

    console.log(i)
}

// for loop with continue -> skip and then continue

for(let i = 1; i < 6; i++){
    if(i === 3) continue

    console.log(i)
}