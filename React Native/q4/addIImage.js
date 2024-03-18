import React, { useState, useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

// Create an app to fetch data from a JSON API. Use this data
// to render on the page. Provide ability to paginate
// the results Video
export default function UsersData() {
  const [data, setData] = useState([]);
  const [newdata, setnewData] = useState(true);

  useEffect(() => {
    fetch("https://randomuser.me/api")
      .then((d) => d.json())
      .then((d) => {
        const req = {
          name: d.results[0].name.first,
          img: d.results[0].picture.medium,
        };
        console.log(d.results[0].name.first, d.results[0].picture.medium);
        setData([...data, req]);
      });
  }, [newdata]);

  return (
    <View style={style.mainContent}>
      {data.length > 0 &&
        data.map((d) => (
          <View>
            <Image
              source={{ uri: d.img }}
              style={{ width: "50px", height: "50px" }}
            />
            <Text>{d.name}</Text>
          </View>
        ))}
      <TouchableOpacity
        onPress={() => {
          setnewData(!newdata);
        }}
      >
        Touch me
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  mainContent: {
    flex: 1,
    backgroundColor: "white",
  },
});
