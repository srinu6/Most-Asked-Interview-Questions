// Create a polyfill for filter method

Array.prototype.myFilter = function (callback){
    let req=[];
    for(let i=0;i<this.length;i++){
        if(callback(this[i], i, this)){
            req.push(this[i]);
        }
    }
    return req;
}

const newArray= [0, 1, 2, 5, 23, 76, 7];
const resData = newArray.myFilter(function (item, index, arr){
   return item %2 === 0;
});

console.log(resData);