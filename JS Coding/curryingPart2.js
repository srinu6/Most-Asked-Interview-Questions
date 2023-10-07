let curry = (fun) => {
  let helper = (...args) => {
    if (args.length >= fun.length) {
      return fun(...args);
    } else {
      let temp = (...args2) => {
        return helper(...args, ...args2);
      };
      return temp;
    }
  };
  return helper;
};

function sum(a, b, c, d) {
  return a + b + c + d;
}

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3, 4, 5)); // 10
console.log(curriedSum(1)(2, 3)(4, 5)); // 10
console.log(curriedSum(1)(2)(3)(4)); // 10
