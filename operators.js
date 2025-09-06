let x=10,y=7
console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)
console.log(x**y)
//assignment operators
let z=5
z+=7
z*=2
console.log(z)
z+=2
console.log(z)
z-=2
console.log(z)
z**=2
console.log(z)
//comparision operators
let a=43,b="43"
console.log(a==b)
console.log(a!=b)
console.log(a===b)
console.log(a!==b)
console.log(a<=b)
console.log(a>=b)
console.log(a<b)
console.log(a>b)
//logical operators
let age=20
console.log(age>=20 && age<=40)
console.log(a<20 || age>20)
console.log(!(age<19))
//string operators
let firstName="seeyonu"
let lastName="kumari"
let fullName=firstName +" "+lastName
console.log(fullName)
let correctName=`Hello ${firstName} ${lastName},welcome to devastra`
console.log(correctName)
//ternary operator
let myAge=18
if(myAge>=18){
    console.log("Elligible to vote")
}
else{
    console.log("you cannot vote")
}
let result=myAge>=19 ? "Eligible to vote" : "you cannot vote"
console.log(result)
//increment and decrememt operators
let count=5
console.log(count++)
console.log(count)
console.log(++count)
//typeof operators
console.log(typeof count)
console.log(typeof "seeyonu")
console.log(typeof 43)