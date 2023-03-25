var object = new Object();

var obj2 = Object.create(null);

function Person(name) {
  this.name = name;
}
var obj3 = new Person("sri");

function Pers() {}
Pers.prototype.name = "sri";
var obj4 = new Pers();

var object = {
    name: "Sudheer",
    age: 34
};

//Object literal property values can be of any data type, including array, function, and nested object.