const promise1 = new Promise((resolve, reject) => {
  resolve("Sri");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Srinu");
  }, 100);
});

const promise3 = 100;

// Promise.all([promise1, promise2,promise3]).then((d)=>console.log(d)).catch((e)=>console.log(e))

// Promise.myRace = (arrayOfPromises) =>{
//   return new Promise((resole, reject)=>{
//     for(let i=0;i<arrayOfPromises.length;i++){
//       Promise.resolve(arrayOfPromises[i]).then((d)=> resole(d)).catch((e)=> reject(e))
//     }
//   })
// }

// Promise.myRace([promise1, promise2, promise3]).then((d)=>console.log(d), (e)=>console.log(e))

Promise.myAll = (arrayOfPromises) => {
  return new Promise((resolve, reject) => {
    const res = [];
    let count = 0;
    for (let i = 0; i < arrayOfPromises.length; i++) {
      Promise.resolve(arrayOfPromises[i])
        .then((d) => {
          res[i] = d;
          count++;
          if (count === arrayOfPromises.length) {
            resolve(res);
          }
        })
        .catch((e) => console.log(e));
    }
  });
};

Promise.myAll([promise1, promise2, promise3])
  .then((d) => console.log(d))
  .catch((e) => console.log(e));
