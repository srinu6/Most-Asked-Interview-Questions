/*Most important JavaScript 
  array methods for interviews
  with Examples! 
  
  Definition: filter method creates
  a new array from a given array 
  consisting of only those elements
  from the given array which 
  satisfy a condition.
  
  2st Array Method: filter()
*/

const users = [
  { name: "Sri", age: 2 },
  { name: "Rowdy", age: 3 },
  { name: "Coder", age: 4 },
  { name: "SDE", age: 2 },
];

const ch = users.filter((user) => {
  return user.age > 2;
});

ch.map((x) => {
  console.log(x.name + " " + x.age);
});
