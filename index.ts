console.log("hello world")
let myName:string = "Kashif"
console.log(myName)
let hello:string = "Hello " + myName
console.log(hello)
let testVariable = 1
console.log(typeof testVariable)

function greet(name:string){
    console.log("Hello, " + name.toUpperCase() + " !!");
}
greet("kashif")


let num1= (x:number, y:number):number=>{
    return x+y;
}
console.log(num1(3,5))