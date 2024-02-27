// Implement a function in JavaScript that takes a list
// of async functions as input and a callback function
// and executes the async tasks in parallel that is all
// at once and invokes the callback after every task is executed.

const execute = (tasks, callback) => {
  const result = [];
  const errors = [];
  let taskCompleted = 0;
  tasks.forEach((task) => {
    task()
      .then((res) => {
        result.push(res);
      })
      .catch((err) => {
        errors.push(err);
      })
      .finally(() => {
        taskCompleted++;
        if (taskCompleted === tasks.length) {
          callback([...result, ...errors]);
        }
      });
  });
};

const a1 = () => {
  const val = Math.random() * 10;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (val > 5) {
        resolve(val);
      } else {
        reject(val);
      }
    }, val * 1000);
  });
};

const a2 = () => {
  const val = Math.random() * 10;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (val > 5) {
        resolve(val);
      } else {
        reject("Error " + val);
      }
    }, val * 1000);
  });
};

const a3 = () => {
  const val = Math.random() * 10;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (val > 5) {
        resolve(val);
      } else {
        reject(val);
      }
    }, val * 1000);
  });
};

execute([a1, a2, a3], (res) => {
  console.log(res);
});
