// Input:
const s = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
      L: {
        m: "sri",
        n: "26",
      },
    },
    Q: [1, 2],
  },
};

const req = {};
const deepFlatten = (obj, initial) => {
  for (let i in obj) {
    let ina = initial === "" ? i : initial + "." + i;
    ina = ina.trim();
    if (typeof obj[i] === "object") {
      deepFlatten(obj[i], ina);
    } else {
      req[ina] = obj[i];
    }
  }
};

deepFlatten(s, "");
console.log(req, "req");
// Output:
const out = {
  A: "12",
  B: 23,
  "C.O.L": 56,
  "C.P": 23,
  "C.Q.0": 1,
  "C.Q.1": 2,
};
