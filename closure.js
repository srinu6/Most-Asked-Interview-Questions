/*Most Asked JavaScript 
  Theoritical concepts  with
  Examples!  
  
  Definition: Closure means 
  that an inner function 
  always has access to the 
  varibles of its outer 
  function, even after the 
  outer function has 
  returned.
  
  Concept-1:Closure Example! 
*/

function exm() {
  const name = "Rowdy";
  function inner() {
    return name;
  }
  return inner;
}
const inner_func = exm();
console.log(inner_func);
console.log(inner_func());

/*Most Asked JavaScript 
  Theoritical concepts  with
  Example!
  
  Concept1: Closure Example
*/

function foo() {
  const b = 1;
  function inner() {
    return b;
  }
  return inner;
}
const func_inner = foo();
console.log(func_inner);
console.log(func_inner());
