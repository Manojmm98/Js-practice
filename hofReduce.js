let arr=[10,40,60,70];
// foo is a higher function of reduce have storage and ithElement with it 
function foo(storage,ithElement){
    return storage+ithElement;
}
// call reduce through arr.reduce by passing foo function
let ans = arr.reduce(foo);
console.log(ans);

//```````````````````````````````````//

// polyfill of reduce//

// crrate myReduce function pass arr and cb as arguments
function myReduce(arr, cb) {
    //let intially storage at 0th index
    let storage = arr[0];
    // start from index 1 till size of array
    for(let i=1;i<arr.length;i++){
        //call the function cb
        storage=cb(storage,arr[i]);
    }
    // return cb function
    return storage;
}
//call myReduce function
console.log(myReduce(arr,foo));