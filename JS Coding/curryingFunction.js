// Input:
// {
//   a : {
//     b : (a,b,c) => a+b+c,
//     c : (a,b,c) => a+b-c,
//   },
//   d : (a,b,c) => a-b-c
// }

// Fn(obj)(1,1,1);

// Output:
// {
//   a : {
//     b : 3,
//     c : 1
//   },
//   d: -1
// }

let test = {
  a: {
    b: (a, b, c) => a + b + c,
    c: (a, b, c) => a + b - c,
  },
  d: (a, b, c) => a - b - c,
  e: 1,
  f: true,
};

const pipe = (obj) => {
  return (...args) => {
    for (let i in obj) {
      const val = obj[i];
      if (typeof obj[i] === "function") {
        obj[i] = val(...args);
      } else {
        obj[i] = pipe(obj[i])(...args);
      }
    }
    return obj;
  };
};

console.log(pipe(test)(1, 1, 1));
console.log(test, "what");
