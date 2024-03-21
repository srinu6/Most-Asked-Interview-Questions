let obj1 = {
  name: "prashant",
  age: 23,
  nature: {
    helping: true,
    shy: false,
  },
};

let obj2 = {
  qualification: "BSC CS",
  loves: "Javascript",
  nature: {
    angry: false,
    shy: true,
  },
};

console.log(merge(obj1, obj2));

const merge = (...args) => {};

/*
  Object {
    age: 23,
    loves: "Javascript",
    name: "prashant",
    nature: Object {
      angry: false,
      helping: true,
      shy: true
    },
    qualification: "BSC CS"
  }
  */
