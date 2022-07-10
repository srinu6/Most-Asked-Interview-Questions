/*Most important JavaScript 
  array methods for interviews
  with Examples! 
  
  Definition: this method reduce the array
  to a single value and executes a 
  provided function for each value of the 
  array (from left-to-right) and the 
  return value of the function is stored
  in an accumulator.
  
  3st Array Method: reduce()
*/
//array.reduce(callbackFn, initialValue)

const numbers = [1, 3, 5, 7];

const sum = numbers.reduce((acc, num) => {
  console.log(acc, num);
  return acc + num;
}, 0);

console.log(sum);
