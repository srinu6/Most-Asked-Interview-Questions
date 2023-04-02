// FlexCar for SDE-2 - Round - 1

//1. Create a polyfill for Filter method
//2. Create a polyfill for Object.entries
//3. create a custom hook that provides a counter that can be used to display on the screen and three buttons play, pause, and reset with functionality in react

//4. lets suppose we are running a useEffect for every millsecond, which means 1000times per second, and updating the count for every milisecond. How many time do you think UI repaint will happen?  (react do batch processing, which means state update happens in a batch)
//5. shouldCompenentUpdate and useMemo

const obj = {
  a: 3,
  b: {
    c: 8,
  },
};

Object.prototype.myEntries = function (realObject) {
  const ent = [];
  const keyss = Object.keys(realObject);
  const valuess = Object.values(realObject);
  console.log(keyss);
  console.log(valuess);
  for (let i of keys) {
    ent.push([keys[i], values[i]]);
  }

  //    for(let i in realObject){
  //      const keyVal=[];
  //      if(typeof i ==="object"){
  //        myEntries(realObject[i]);
  //      }

  //      keyVal.push(i);
  //      keyVal.push(realObject[i]);
  //      ent.push(keyVal)
  //    }
  return ent;
};

console.log(Object.myEntries(obj));

const arr = [2, 345, 654, 23, 24];

const filteredArrar = arr.filter((item, index, array) => {
  return item % 2 === 0;
});

const itemFilter = (item) => {
  return item % 2 === 0;
};

const itemMoreFilter = (item) => {
  return item > 100;
};

Array.prototype.myFilter = function (callback) {
  const filtered = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      filtered.push(this[i]);
    }
  }
  return filtered;
};

const polyfillFilteredItems = filteredArrar.myFilter(itemFilter);
console.log(polyfillFilteredItems);

// More than 100`
const polyfillFilteredMorethanItems = arr.myFilter(itemMoreFilter);
console.log(polyfillFilteredMorethanItems);
