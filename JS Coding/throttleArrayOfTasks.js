const throttle = (task, count = task.length, callback, delay = 1000) => {
  // track the throttle
  let lastFunc;
  let lastRan;

  // track the task
  let queue = [];

  return function () {
    // store the context to pass it to the callback function
    const context = this;
    const args = arguments;

    // if the throttle is executed the first time
    // run it immediately
    if (!lastRan) {
      // copy all the tasks to the queue
      queue = [...queue, ...task];

      // get the amount of task to run
      const execute = queue.splice(0, count);

      // pass those tasks to the callback
      callback(execute);

      // update the last ran time
      // to run it after the delay
      lastRan = Date.now();
    } else {
      // clear the timer
      clearTimeout(lastFunc);

      // start a new timer
      // run the function after the delay
      lastFunc = setTimeout(function () {
        // calc the difference between
        // the last ran and current time
        // if it is greater than the delay
        // invoke it
        if (Date.now() - lastRan >= delay) {
          // copy all the tasks to the queue
          queue = [...queue, ...task];

          // get the amount of task to run
          const execute = queue.splice(0, count);

          // pass those tasks to the callback
          callback(execute);

          // update the last ran time
          // to run it after the delay
          lastRan = Date.now();
        }
      }, delay - (Date.now() - lastRan));
    }
  };
};

// Input:
// this will add these tasks at each call
btn.addEventListener(
  "click",
  throttle(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    2,
    (task) => {
      console.log(task);
    },
    2000
  )
);

// Output:
// // [object Array] (2)
// [1, 2]// 1st call

//   // [object Array] (2)
// [3, 4]
// // 2nd call after 2 seconds

//   // [object Array] (2)
// [5, 6]
//  // 3rd call after 2 seconds

//   // [object Array] (2)
// [7, 8]
// // 4th call after 2 seconds

//   // [object Array] (2)
// [9, 10]
// // 5th call after 2 seconds

//   // [object Array] (2)
// [1, 2]
//  // 6th call after 2 seconds
