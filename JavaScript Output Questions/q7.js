/* Most Asked
     JavaScript Output Q&A
     => With Reason!
     ➼ 7th ♛ Question */

const x1 = new Promise((res, req) => {
  setTimeout(res, 500, "one");
});

const x2 = new Promise((res, req) => {
  setTimeout(res, 100, "one");
});

Promise.all([x1, x2]).then((res) => {
  console.log(res);
});

Promise.race([x1, x2]).then((res) => {
  console.log(res);
});
