// Most Asked
// JavaScript Output Q&A
// => With Reason!
// 9th Question

console.log({ a: 1 } == { a: 1 });
console.log({ a: 1 } === { a: 1 });

const h1 = { h: "Thor", i: "IM" };
const h2 = { h: "Thor", i: "IM" };
console.log(h1 == h2);
console.log(h1 === h2);

// Most Asked
// JavaScript Output Q&A
// => With Reason!
// 9th Question

const h1 = { h: "Thor", i: "IM" };
const h2 = { h: "Thor", i: "IM" };
const h3 = h2;
console.log(h1 == h2);
console.log(h1 === h2);
console.log(h2 === h3);

const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
const array3 = array2;
console.log(array1 === array2);
console.log(array2 === array3);

const User = function (name) {
  this.name = name;
};
const user1 = new User("Rowdy");
const user2 = new User("Rowdy");
console.log(user1 == user2);
