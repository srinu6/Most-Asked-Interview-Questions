//PAL TECH
let array1 = [10, 20, 30];
let array2 = array1;
let array3 = [...array1];
array1[0] = 50;
array2[2] = 80;
array3[4] = 100;
console.log(array1); // 50, 20, 80
console.log(array2); // 50, 20, 80
console.log(array3); //  10, 20, 30, undefined, 100

console.log("1");
setTimeout(function () {
  console.log("2");
}, 0);
function test() {
  console.log("3");
}
test();
Promise.resolve().then(function () {
  console.log("4");
});
console.log("5");

// 1, 3, 5, 4, 2

for (var i = 0; i <= 5; i++) {
  setTimeout(function clog() {
    console.log(i);
  }, i * 1000);
}

// 6, 6, 6, 6, 6, 6
// 0, 1, 2, 3, 4, 5

const ShowUserData = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch(`fgh`)
      .then((data) => data.json())
      .then((da) => setUserData(da));
  }, []);

  // [[name, “Sri”], [age: 26]]
  return (
    <View>
      {userData.map((user) => {
        return (
          <View>
            {Object.entries(user).map((keyVal) => {
              return (
                <>
                  <Text>{keyVal[0]}</Text>
                  <Text>{keyVal[1]}</Text>
                </>
              );
            })}
          </View>
        );
      })}
    </View>
  );
};

// redux persist.

//Unit test case
// how do you write unit test for setTimeout? we cannot wait if timer is present right,
// in that case how to write unit test?

// ANS: Mocking/faking the setTimeout. Same applies for fetch()

// 2nd round

interface Store {
  getItem: (key) => String;
  setitem: (key, value) => void;
  removeItem: (key) => void;
}

// using Generic while doing typing.
