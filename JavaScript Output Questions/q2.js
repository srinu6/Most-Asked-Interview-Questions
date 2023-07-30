// Most Asked
// JavaScript output Q & A => With reason!
// 2nd Question

console.log(1);

setTimeout(() => {
  console.log(2);
}, 1000);

setTimeout(() => {
  console.log(3);
}, 0);

Promise.resolve(1).then(function resolve() {
  setTimeout(() => {
    console.log(4);
  }, 0);
});

console.log(5);

// output
// 1
// 5
// 3
// 4
// 2
