const age = 11
const hasId = true

if(age >= 18){
    console.log("You are legal to vote.")
    if(hasId){
        console.log("You can vote.")
    }else{
        console.log("You need id to vote.")
    }
}else{
    console.log("You are not legal age to vote.")
}