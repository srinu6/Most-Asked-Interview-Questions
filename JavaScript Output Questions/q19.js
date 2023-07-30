//
function print() {
  console.log(a);
  a = 15;
}
print();

var a = 10;
function print() {
  console.log(a);
  var a = 15;
}
print();
var a = 5;
print();

//
var arr1 = [
  [1, 2],
  [2, 4],
  [4, 8],
];
var arr2 = [...arr1];

arr1[0][1] = "1";
arr1[0][0] = "0";
arr1[1] = 33;
arr1[0] = 22;
console.log(arr1);
console.log(arr2);

//
var test = {
  name: "abc",
  foo: () => {
    console.log(this.name);
  },
};

var output = test.foo;
output();
test.foo();

var test = {
  name: "abc",
  foo: function () {
    console.log(this.name);
  },
};

var output = test.foo;
output();
test.foo();
