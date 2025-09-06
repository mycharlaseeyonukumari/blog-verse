let marks=85
if(marks>=90){
    console.log("A+ grade")
}
else if(marks>=80){
    console.log("A grade")
}
else if(marks>=70){
    console.log("B grade")
}
else{
    console.log("fail")
}
let choice=3
switch (choice){
    case 1:
    console.log("Monday")
    break
    case 2:
    console.log("Tuesday")
    break
    case 3:
    console.log ("Wednesday")
    break
    case 3:
    console.log("Thursday") 
    break
    case 1:
    console.log("Friday")
    break
    case 2:
    console.log("Saturday")
    break
    case 3:
    console.log("Sunday") 
    break
    default:
    console.log("Invalid")
    break
}
let i,n=35
for(i=0;i<n;i++)
    {
    console.log(i)
}
let j=1
while(j<10)
{
    console.log(j)
    j++
}
let colors= ["hite","red","blue","black"]
for(let i=0;i<colors.length;i++)
{
    console.log(colors[i])
}
for(color of colors)
{
 console.log(color)
}
let person={
    name:"eeyonu",
    age:19,
    college:"JNTU-GEV"
}
for (key in person)
{
    console.log(`${key}: ${person[key]}`)
}
for(let i=5;i>=0;i--){
    if(i===3)
    {
        continue
    }
    }
 

