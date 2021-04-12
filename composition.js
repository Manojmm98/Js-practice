//smaller function
function add(x,y){
    return x+y;
}
//smaller function
function subtract(x,y){
    return x-y;
}
//smaller function
function multiply(x,y){
    return x*y;
}
//smaller function
//smaller function are also called callback function ----->
//callback function----------->"I will call back later!"

`A callback is a function passed as an argument to another function,
This technique allows a function to call another function,
A callback function can run after another function has finished`
function divide(x,y){
    if(y==0){
        console.log("Invalid arguments")
    }
    return x/y;
}
//bigger function
// opreatorFn is higher order function we can declare a function within another function which is called higher order function
function calculator(x,y,opreatorFn){
    let ans = opreatorFn(x,y);
    return ans;
}
console.log("Result is :",calculator(10,20,add));
console.log("Result is :",calculator(20,30,subtract));
console.log("Result is :",calculator(30,50,multiply));
console.log("Result is :",calculator(50,56,divide));