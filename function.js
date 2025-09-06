function greet()
{
    console.log("welcome to devastra")
}
greet()
function add(x,y)
{
    return x+y
}
let result=add(5,4)
console.log(result)
const pi=3.14
console.log(pi)

const multiply=function(x,y){
    return x*y;
}
console.log(multiply(5,3))
//arrow function
const subtract = (x,y)=>{
    console.log(x,y)
    return x-y
}
const square = (x)=>x*x
console.log(square(5))