/*In JavaScript, memoization is a technique for optimizing functions by caching the results of their computations. This technique is particularly useful for functions that are expensive to compute and are called repeatedly with the same arguments.

Here is an example of how to implement memoization in JavaScript: */

function memoize(func) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const result = func.apply(this, args);
    cache[key] = result;
    return result;
  };
}

function expensiveFunction(n) {
  console.log("Computing...");
  return n * 2;
}

const memoizedFunction = memoize(expensiveFunction);

console.log(memoizedFunction(5)); // Output: Computing... 10
console.log(memoizedFunction(5)); // Output: 10 (cached result)
