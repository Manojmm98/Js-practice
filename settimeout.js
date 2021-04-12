console.log("before");
// create a callback function 
function cb(){
    console.log("i will call u back after 2 sec");
}
setTimeout(cb,2000);//for call the function after 2 sec just call settimeout function and pass callback function and pass interval
let finisher = setInterval(cb,2000);// create a finisher to finish settimeout
// now just create a function settimeout and and create a function fn and call finisher by creating clearinterval
setTimeout(function fn(){
    clearInterval(finisher);
},2000);
// pass a time when we want to stop the action 
console.log("after");