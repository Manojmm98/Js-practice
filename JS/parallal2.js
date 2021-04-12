let fs = require('fs');
console.log("before")
let arr=[" ../f1.txt", "../f2.txt", "../f3.txt"];
for (let i=0; i<arr.length; i++){
    fs.readFile(arr[i], function(err, data){
        if (err){
            console.log(err);
        }
        else{
            console.log(data);
        }
    })

}