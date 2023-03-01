// Most important JavaScript Interview Question.

const numbers = [
  1,
  [3, [2, 8, [12]], 9],
  [5],
  [12, 5],
  [100, [23, 45, 83, [[1, 2], 54, 67], 54, [64]], 35, 1],
];

// Output [1, 3, 2, 8, 12, 9, 5, 12, 5, 100, 23, 45, 83, 1, 2, 54, 67, 54, 64, 35, 1]

// Brute Force Approach

// 1st Apprach - Recurrsive
const flattenNumbers = (numbers) => {
  return numbers.reduce((acc, num) => {
    return acc.concat(Array.isArray(num) ? flattenNumbers(num) : num);
  }, []);
};

console.log(flattenNumbers(numbers));

// 2nd
console.log(numbers.flat(Infinity));
