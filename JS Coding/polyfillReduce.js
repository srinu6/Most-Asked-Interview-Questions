
// Create a polyfill for reduce method

Array.prototype.myReduce(callback, initialValue){
    if(this === null || this ===undefined){
        throw new TypeError("reduce for null or undefined")
    }
    
    let acc=initialValue;
     for(let i=0;i<this.length;i++){
        acc = callback(acc, this[i]);
     }
    return acc;
}

const arr= [1, 3, 4, 7, 34, 3];
arr.myReduce(function (a, b){
   return a+b;
}, 0);