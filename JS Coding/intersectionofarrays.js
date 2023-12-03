// Find the Intersection of Two Arrays:

const array1 = [1, 2, 2, 1];
const array2 = [2, 2];
intersection(array1, array2);

const intersection = (array1, array2) => {
  const set1 = new Set(array1);
  const set2 = new Set(array2);

  const result = [];
  for (const i of set1) {
    if (set2.has(i)) {
      result.push(i);
    }
  }
  console.log(result);
};
