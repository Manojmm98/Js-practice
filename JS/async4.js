let fs = require("fs");
console.log('before');
// fs.readFile(".../f1.txt",function cb(err,res,data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })
fs.promises.readFile("f1.txt");