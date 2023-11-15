// implement setTimeout without using setTimeout
// ServiceNow
window.mySetTimeout = function (callback, timer) {
  const targetTime = new Date().getTime() + timer;

  const intervalId = setInterval(() => {
    const currentTime = new Date().getTime();
    if (currentTime >= targetTime) {
      clearInterval(intervalId);
      callback();
    }
  }, 1);
};

window.mySetTimeout(function () {
  console.log("Custom setTimeout executed!");
}, 2000);

// another approach
window.mySetTimeout = function (callback, timer) {
  const startTime = performance.now();

  function checkTime() {
    const currentTime = performance.now(); // Get the current time inside the function
    if (currentTime - startTime >= timer) {
      callback();
    } else {
      requestAnimationFrame(checkTime);
    }
  }

  requestAnimationFrame(checkTime);
};

window.mySetTimeout(function () {
  console.log("Custom setTimeout executed!");
}, 2000);

////////////////////////////////////////////////////////
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

////////////////////////////////////////////////////////
//Generator functions in JavaScript
function* myGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = myGenerator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
