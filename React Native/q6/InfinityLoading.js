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
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";

// Create an app to fetch data from a JSON API. Use this data
// to render on the page. Provide ability to paginate
// the results Video
export default function UsersData() {
  const [data, setData] = useState([]);
  const [newdata, setnewData] = useState(1);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?page=${newdata}&results=10`)
      .then((d) => d.json())
      .then((d) => {
        const da = [];
        d.results.forEach((f) => {
          let req = {
            name: f.name.first,
            img: f.picture.medium,
          };
          da.push(req);
        });
        setData([...data, ...da]);
      });
  }, [newdata]);

  const renderItem = ({ item }) => {
    return (
      <View>
        <Image
          source={{ uri: item.img }}
          style={{ width: "50px", height: "50px" }}
        />
        <Text>{item.name}</Text>
      </View>
    );
  };

  const handleEnd = () => {
    console.log(newdata, "newdd");
    setnewData(newdata + 1);
  };

  return (
    <View style={style.mainContent}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.img}
        onEndReached={handleEnd}
        onEndReachedThreshold={0}
      />
      <ActivityIndicator />
    </View>
  );
}

const style = StyleSheet.create({
  mainContent: {
    flex: 1,
    backgroundColor: "white",
  },
});
