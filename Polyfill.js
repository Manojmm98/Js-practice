//declare a square function which will reurn x*x
function square(x){
    return x*x;
}
//declare a cube  function which will return x*x*x
function cube(x){
    return x*x*x;
}
//The main array class where we will declare the prototype methods for child class and child class will simply call that method
Array.prototype.myMap = function( cb) {     //also similar to Array.prototype.myMap= function(arr,cb)
    let tArr= [];
    for (let i=0;i<this.length;i++) {
        let ans = cb(this[i]);
        tArr.push(ans);
    }
    return tArr;
}
// create two new child array
let arr1= [20,30,50,60,80];
let arr2= [11,22,33,44,55];

// here we are calling myMap in child arr class
let newarr= arr1.myMap(square);
let newarr2 = arr2.myMap(cube);

console.log(newarr);
console.log(newarr2);
