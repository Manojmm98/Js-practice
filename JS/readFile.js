let fs= require("fs");
console.log("before");
fs.readFile("f1.txt",cb);
function cb(err, data)
{
    let content = console.log("content-->"+ data);
}
console.log("after");
console.log("other work");
