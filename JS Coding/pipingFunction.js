//Input:
const val = { salary: 10000 };

const getSalary = (person) => person.salary;
const addBonus = (netSalary) => netSalary + 1000;
const deductTax = (grossSalary) => grossSalary - grossSalary * 0.3;

// Output:
// 7700

function pipe(...funs) {
  return function (val) {
    for (let f of funs) {
      val = f(val);
    }
    return val;
  };
}

const result = pipe(getSalary, addBonus, deductTax)(val);

console.log(result);
