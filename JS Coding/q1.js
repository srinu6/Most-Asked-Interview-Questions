// Syfe Company

// ["123f", "1dsa12", "1212ds", "65fd", "sadfa", "asdasd"]
// 1512
// 123 + 112 + 1212 + 65 + 0 + 0

// func([2, 4, 2, 5, 3, 6, 3], 3)
// [[2,4,2],[5,3,6],[3]]

const arr = [2, 4, 2, 5, 3, 6, 3];
const chunk = (newArr, chu) => {
  let req = [];
  for (let i = 0; i < newArr.length; i++) {
    let j = 0;
    var chunkArray = [];
    while (j < chu && i < newArr.length) {
      chunkArray[j] = arr[i];
      j++;
      if (j < chu) {
        i++;
      }
    }
    req.push(chunkArray);
  }
  console.log(req);
};
chunk(arr, 2);

// O(n * che)

let arr = ["123f", "1dsa12", "1212ds", "65fd", "sadfa", "asdasd"];
const number = (stringItem) => {
  var str = "";
  for (let x of stringItem) {
    if (
      x == 0 ||
      x == 1 ||
      x == 2 ||
      x == 3 ||
      x == 4 ||
      x == 5 ||
      x == 6 ||
      x == 7 ||
      x == 8 ||
      x == 9
    ) {
      str = str + x;
    }
  }
  return str;
};

const sum = (arr) => {
  let str = "";
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    str = number(arr[i]);
    if (str !== "") {
      total = parseInt(str) + total;
    }
  }
  return total;
};

console.log(sum(arr));

// Codepad Maripi Srinuvasarao|StanzaLiving|ReactNative SDE1|Coding

/**
 * Given an array [“123f”, “1dsa12”, “1212ds”, “65fd”, “sadfa”, “asdasd”]
 * Each item can contain 0-9, a-z, A-Z where a-z, A-Z characters are unwanted
 * Sum of all the numbers after removing all the unwanted characters 123+112+1212+65
 **/

const sumArr = (arr) => {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    let str = "";

    for (let j = 0; j < arr[i].length; j++) {
      if (
        arr[i].charAt(j) === "0" ||
        arr[i].charAt(j) === "1" ||
        arr[i].charAt(j) === "2" ||
        arr[i].charAt(j) === "3" ||
        arr[i].charAt(j) === "4" ||
        arr[i].charAt(j) === "5" ||
        arr[i].charAt(j) === "6" ||
        arr[i].charAt(j) === "7" ||
        arr[i].charAt(j) === "8" ||
        arr[i].charAt(j) === "9"
      ) {
        str = str + arr[i].charAt(j);
      }
    }

    if (str !== "") {
      total = total + parseInt(str);
    }
  }
  return total;
};

console.log(sumArr(["123f", "1dsa12", "1212ds", "65fd", "sadfa", "asdasd"])); // 1512
console.log(sumArr(["asdasd"])); // 0
console.log(sumArr(["asdasd12"])); // 12
console.log(sumArr(["12"])); // 12
