/*Most important JavaScript 
  array methods for interviews
  with Examples! 
  
  4th Array Method: sort()
*/

const superHeros = [
  { name: "Thor", age: 2000, IQ: 150 },
  { name: "IronMan", age: 40, IQ: 200 },
  { name: "Hulk", age: 80, IQ: 160 },
  { name: "CAmerica", age: 200, IQ: 150 },
  { name: "Natasha", age: 35, IQ: 140 },
];

superHeros.sort((a, b) => {
  return a.age - b.age;
});

superHeros.forEach((superHero) => {
  console.log(superHero.name);
});
