// with map function

let arr =[20,40,38,56];
function square(x){
    return x*x;
}
let newarr = arr.map(square);
console.log(newarr);

//``````````````````````````````````````//
 //without Map function  Inner Working

function myarray(arr,cb){
    let newarr=[];
    for(let i=0;i<arr.length;i++){
        let ans=cb(arr[i]);
        newarr.push(ans);
    }
    return newarr;
}
console.log(myarray(arr,square));