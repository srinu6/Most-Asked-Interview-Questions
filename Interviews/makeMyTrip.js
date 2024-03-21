const a = {
  count: 0,
};

const b = a;
b.count = a.count++;

console.log(b.count, a.count);

//////////////////////////////////

const a1 = {
  count: 0,
};

const b1 = a1;
b1.count = ++a1.count;

console.log(b1.count, a1.count);

const s = {
  hello: "sri",
  34: undefined,
  1: "HELLO",
  2: "SSS",
};
s["assign"] = "world";
s[-4] = "mee";

console.log(Object.keys(s));
//  ['1', '2', '34', 'hello', 'assign', '-4']

// react native testing library--- we will have testID for View, based on that we can run the tests. with accessibilityRole as well for android.

// useEffect with no dependency array --- useEffect will be called on every rerender.



