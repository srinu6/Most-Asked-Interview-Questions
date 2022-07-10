console.log({ a: 1 } == { a: 1 });
console.log({ a: 1 } === { a: 1 });

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 143;
a[c] = 286;

console.log(a[b]);

console.log(b.toString());
