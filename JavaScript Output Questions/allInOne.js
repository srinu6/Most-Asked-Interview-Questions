const obj = {
  name: "Billy",
  sing: function () {
    this.age = "20";
    console.log("a", this);
    var anotherFunction = function () {
      this.age = "30";
      console.log("b", this);
    };
    anotherFunction();
  },
};
obj.sing();

////////////////////////////////////////////////

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

console.log("begins");

setTimeout(() => {
  console.log("setTimeout 1");
  Promise.resolve().then(() => {
    console.log("promise 1");
  });
}, 0);

new Promise(function (resolve, reject) {
  console.log("promise 2");
  setTimeout(function () {
    console.log("setTimeout 2");
    resolve("resolve 1");
  }, 0);
}).then((res) => {
  console.log("dot then 1");
  setTimeout(() => {
    console.log(res);
  }, 0);
});

//output:
("begins");
("promise 2");
("setTimeout 1");
("promise 1");
("setTimeout 2");
("dot then 1");
("resolve 1");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

console.log("script start");

setTimeout(function () {
  console.log("setTimeout");
}, 0);

async1();

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});

console.log("script end");

// output:

("script start");
("async1 start");
("async2");
("promise1");
("script end");
("async1 end");
("promise2");
("setTimeout");
