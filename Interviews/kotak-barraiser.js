// Create a universal function that can accept an object as a parameter, and then create a logic to generate the single object output as shown below 


// input
var user = {
  name: "Vishal",
  address: {
    primary: {
      house: "109",
      street: {
        main: 21,
        cross: ["32", "1"],
      },
    },
  },
};

//output

// {
//   user_name: "Vishal",
//   user_address_primary_house: "109",
//   user_address_primary_street_main: 21,
//   user_address_primary_street_cross: ["32", "1"],
// }

function flattenObject(obj, parentKey = "") {
  let result = {};

  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      result = {
        ...result,
        ...flattenObject(obj[key], `${parentKey}${key}_`),
      };
    } else {
      result[`${parentKey}${key}`] = obj[key];
    }
  }

  return result;
}

var user = {
  name: "Vishal",
  address: {
    primary: {
      house: "109",
      street: {
        main: 21,
        cross: ["32", "1"],
      },
    },
  },
};

var flattenedUser = flattenObject(user);

console.log(flattenedUser);


///////////////////////////////////////////////////
// given a number, need to prepare N X N boxes on screen, clicking on it should show blue color. 
const [a, setA]=useState(2);

  const Tile=()=>{
    return <View style={styles.box}> </View>
  }
 const newView=[]
 const tileView = []

 for(let i=0;i<a;i++){
    tileView.push(<Tile />)
 }


  for(let i=0;i<a;i++){
      newView.push(<View style={styles.row}>    
   {tileView.map(d=> d)}
        
        </View>)
  }

  return (
    <View>
  {newView.map(d=> d)}
</View>
  );
};