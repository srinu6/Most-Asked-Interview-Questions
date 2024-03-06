// This was asked in many companies

const validParentheses = (par) => {
  const parenthesis = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const stack = [];
  for (let pa = 0; pa < par.length; pa++) {
    if (parenthesis[par[pa]]) {
      stack.push(par[pa]);
    } else if (parenthesis[stack.pop()] !== par[pa]) {
      return false;
    }
  }

  return stack.length === 0;
};

console.log(validParentheses("()[]"));
console.log(validParentheses("{[]}"));
console.log(validParentheses("([)]"));
