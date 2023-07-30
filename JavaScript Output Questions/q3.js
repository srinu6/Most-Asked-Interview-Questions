// Most Asked
// JavaScript output Q & A => With reason!
// 3st Question

for (var i = 0; i < 4; i++) {
  setTimeout(() => {
    console.log(i);
  }, 500);
}

for (let i = 0; i < 4; i++) {
  setTimeout(() => {
    console.log(i);
  }, 7000);
}

for (var i = 0; i < 4; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i);
    }, 14000);
  })(i);
}

// output

// 4
// 4
// 4
// 4
// 0
// 1
// 2
// 3
// 0
// 1
// 2
// 3
