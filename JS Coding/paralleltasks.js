// Execute promises (async function) in parallel

function asyncFunctin() {
  return new Promise((resolve, reject) => {
    let random = Math.random();
    setTimeout(() => {
      if (random * 10 > 3) {
        resolve(random * 10);
      } else {
        reject(Error, random * 10);
      }
    }, random * 10 * 1000);
  });
}

asyncFunctin()
  .then((d) => {
    console.log(d);
  })
  .catch((e) => {
    console.log(e);
  });

const tasks = [
  asyncFunctin(),
  asyncFunctin(),
  asyncFunctin(),
  asyncFunctin(),
  asyncFunctin(),
  asyncFunctin(),
  asyncFunctin(),
  asyncFunctin(),
];

const parallelTasks = (tasks) => {
  const res = [];
  tasks.forEach((element) => {
    element
      .then((d) => {
        res.push(d);
      })
      .catch((e) => {
        res.push(e);
      })
      .finally(() => {
        if (res.length >= tasks.length) {
          console.log(res);
        }
      });
  });
};
console.log(parallelTasks(tasks));
