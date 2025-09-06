let person={
    name:"seeyonu",
    age:19,
}
console.log(person.name)
console.log(person["age"])
const {name,age}=person;
console.log(name)
console.log(age)
let fruits=["mango","apple","grapes"]
console.log(fruits[0])
let numbers=[1,2,3,4,5]
let squares=numbers.map((num)=>num*num);    //transform each
console.log(squares)
let even=numbers.filter((num)=>num%2==0)  //filter values
console.log(even)
let sum=numbers.reduce((present,num)=>present+num,1)  //reduce values
console.log(sum)
let per =[{
    name:"seeyonu",
    marks:79,
},
  {
  name:"kumari",
  marks:69,
}]
let min=100
for  (let p of per)
{
if(per.marks>=min)
{
    min=per.marks
}
}
console.log(per.marks)
