const person = {
  name: "ram",
  age: 22,
  greet: () => {
    return `Hello , you are ${this.age} years old`;
  },
};
console.log(person.greet()); // Hello , you are undefined years old

const person1 = {
  name: "ram",
  age: 22,
  greet: function () {
    return `Hello , you are ${this.age} years old`; // Hello , you are 22 years old
  },
};
console.log(person1.greet());

const obj = {
  name: "John",
  sayHello: function () {
    setTimeout(function () {
      // In this context, 'this' does not refer to 'obj'
      console.log(`Hello, ${this.name}!`); // undefined
    }, 1000);
  },
};

const objWithArrow = {
  name: "John",
  sayHello: function () {
    setTimeout(() => {
      // In this context, 'this' refers to 'objWithArrow'
      console.log(`Hello, ${this.name}!`); // 'Hello, John!'
    }, 1000);
  },
};

const obj1 = {
  name: "Billy",
  sing: function () {
    this.age = "20";
    console.log("a", this);
    var anotherFunction = function () {
      this.age = "30";
      console.log("b", this);
    };
    anotherFunction();
  },
};
obj1.sing();
//  what will be the output with explanation
// a { name: 'Billy', age: '20', sing: [Function: sing] }
// b { age: '30' }

const obj2 = {
  name: "Billy",
  sing: function () {
    this.age = "20";
    console.log("a", this);
    var anotherFunction = () => {
      this.age = "30";
      console.log("b", this);
    };
    anotherFunction();
  },
};
obj2.sing();

//   a { name: 'Billy', age: '20', sing: [Function: sing] }
// b { name: 'Billy', age: '30', sing: [Function: sing] }

abc();
function abc() {
  console.log("1");
}
function abc() {
  console.log("2");
}
function abc() {
  console.log("3");
}
// output : 3
// In JavaScript, when you declare multiple functions with the same name, only the last declaration is effective, and it will overwrite any previous declarations. This means that only the last abc function definition will be used, and the previous ones will be ignored.
