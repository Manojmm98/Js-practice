let fs = require('fs');
console.log("before");
fs.readFile("f1.txt", cb);
function cb(error,data) {
    if(error)
    {
        console.log(error);
    }
    else{
        console.log(""+data);
        fs.readFile("f2.txt", cb2);

    }
}
function cb2(error,data) {
    if(error)
    {
        console.log(error);
    }
    else{
        console.log(""+data);
        fs.readFile("f3.txt", cb3);

    }
}
function cb3(error,data) {
    if(error)
    {
        console.log(error);
    }
    else{
        console.log(""+data);
        fs.readFile("f4.txt", cb4);

    }
}
function cb4(error,data) {
    if(error)
    {
        console.log(error);
    }
    else{
        console.log(""+data);
    }
}