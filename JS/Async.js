
// let fs = require("fs");
// console.log("before");
// fs.readFile("f1.txt","utf8",cb);
// fs.readFile("f2.txt","utf8",cb);
// fs.readFile("f3.txt","utf8",cb);
// fs.readFile("f4.txt","utf8",cb);
// function cb(error,data)
// {
//     if(error)
//     {
//         console.log(error);
//     }
//     else{
//         console.log("content-->"+data);
//     }
// }
// console.log("after");
let fs= require("fs");
let arr=["../f1.txt","../f2.txt","../f3.txt","../f4.txt"];
         for(let i=0; i<arr.length;){
    fs.readFile(arr[i],function(err,data){
        if(err){
            console.log(err);
        }
        else{
            console.log(data);

        }
    })
    break;
    i++;
}