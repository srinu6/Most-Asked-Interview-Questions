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
