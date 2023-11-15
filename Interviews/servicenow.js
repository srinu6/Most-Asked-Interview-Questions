async function a() {
  console.log("before a");
  await b();
  console.log("after a");
}

function b() {
  console.log("before b");
  const p = new Promise((resolve) => {
    // Fix: Added a resolve function to the Promise constructor
    setTimeout(() => {
      console.log("in setTimeout");
      resolve(); // Fix: Resolving the promise after the timeout
    }, 1000);
  });
  console.log("after setTimeout");
  return p;
}

console.log("first 1");
a();
console.log("second 1");

// output

// first 1
// before a
// before b
// after setTimeout
// in setTimeout
// after a
// second 1

var a = 3;
let b = 5;
function c() {
  let a = 7;
  let b = 8;
  console.log(a);
  console.log(b);
}
c();

// 7
// 8
