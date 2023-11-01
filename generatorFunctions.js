// Generator functions in JavaScript are a special type of function that allow you to pause and resume their
//  execution. They are defined using an asterisk (*) after the function keyword.
// Inside a generator function, you can use the yield keyword to yield values,
// effectively allowing you to produce a sequence of values lazily.

function* myGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = myGenerator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

//   function* myGenerator() defines a generator function.
//   Inside the generator function, yield is used to produce values (1, 2, and 3) one at a time.
//   gen is an instance of the generator.
//   gen.next() is called to advance the generator's execution.
//   It returns an object with a value property containing the yielded value and a done property
//   that indicates whether the generator has finished.
//   Generators are often used for asynchronous operations and for working with iterables.
// They allow you to write asynchronous code that appears synchronous and can be very useful for
// handling complex asynchronous workflows.

function* asyncGenerator() {
  yield new Promise((resolve) => setTimeout(() => resolve(1), 1000));
  yield new Promise((resolve) => setTimeout(() => resolve(2), 1000));
  yield new Promise((resolve) => setTimeout(() => resolve(3), 1000));
}

(async () => {
  const gen = asyncGenerator();
  for await (const valuePromise of gen) {
    const value = await valuePromise;
    console.log(value);
  }
})();
