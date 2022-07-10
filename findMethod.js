/*Most important JavaScript 
  array methods for interviews
  with Examples! 
  
  Definition: find method is used to 
  get the value of the first element
  in the array that satisfies the
  provided condition.
  
  5th Array Method: find()
*/

const heros = [
  { name: "Thor", age: 2000, IQ: 150 },
  { name: "Hulk", age: 80, IQ: 160 },
  { name: "IronMan", age: 40, IQ: 200 },
  { name: "CAmerica", age: 200, IQ: 150 },
  { name: "Natasha", age: 35, IQ: 140 },
];

const genius = heros.find((hero) => {
  return hero.IQ > 150;
});

console.log(genius.name);
