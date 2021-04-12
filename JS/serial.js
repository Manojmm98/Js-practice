let fs = require('fs');
let arr = ["../f1.txt","../f2.txt","../f3.txt","../f4.txt"];
function fileReader(arr,n){
    if(arr.length==n){
        return;
    }
    fs.readFile(arr[n],function(err,data){
       if(err){
           console.log(err);
       }
       else{
           console.log(data);
           fileReader(arr,n+1);
       }
    })

}
fileReader(arr,0);
console.log("after");