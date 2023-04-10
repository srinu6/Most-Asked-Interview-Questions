const obj = {
  a: "first",
  b: {
    c: "second",
    d: "third",
  },
  e: "fourth",
  f: {
    g: {
      h: "srinu",
    },
  },
};

const deepClone = (obj) => {
  const newObj = Array.isArray(obj) ? [] : {};
  if (null == obj || "object" != typeof obj) return obj;
  if (obj instanceof Date) {
    var copy = new Date();
    copy.setTime(obj.getTime());
    return copy;
  }
  for (let i in obj) {
    if (typeof obj[i] === "object" && obj[i] !== null) {
      newObj[i] = deepClone(obj[i]);
    } else newObj[i] = obj[i];
  }
  return newObj;
};
const req = deepClone(obj);
console.log(req, "new obj");
req.f.g.h = "ssss";
console.log(obj, req, "old obj");
