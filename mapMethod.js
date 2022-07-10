/*Most important JavaScript 
  array methods for interviews
  with Examples! 
  
  Definition: map() method in JS
  creates an array by calling 
  function on every element of array.
  Generally map() method is used to 
  iterate over an array.
  
  1st Array Method: map()
*/

const users = [
  { id: 1, name: "Sri", age: 2 },
  { id: 2, name: "Rowdy", age: 3 },
  { id: 3, name: "Coder", age: 4 },
  { id: 4, name: "SDE", age: 2 },
];

let usersAge = users.map((data) => {
  console.log(data.id + data.name);
  return `${data.name}${data.age}`;
});

usersAge.forEach((x) => {
  console.log(x);
});
