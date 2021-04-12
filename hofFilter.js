// filter function
`the main job of filter function is to filter out the element who are passed in function call or test`
let arr =[20,50,30,80,23,47];
function even(num){
    return num%2==0;
}
// filter array test whether the num%2==0 or not those are passed in the test will go to evenarr
let evenarr = arr.filter(even);
console.log('before')
console.log(evenarr);
 

// without filter function  or Inner Working

function myFilter(arr,test){
    let tArr=[];
    for(let i=0;i<arr.length;i++){
        if (test(arr[i]%2==true)){
           let tArr =tArr.push(arr[i]);
        }
    }
    return tArr;
}
let newArr = arr.filter(even);
console.log(('after'))
console.log(newArr);


