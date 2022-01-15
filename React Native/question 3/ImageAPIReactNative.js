import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  SafeAreaView,
} from "react-native";

const Seperator = () => {
  return <View style={styles.seperate} />;
};

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((c) => c.json())
      .then((cd) => setData(cd));
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={{ uri: item.url }}
            style={{ width: 100, height: 100, borderRadius: 45 }}
          />
          <Text
            numberOfLines={1}
            style={{ alignSelf: "center", paddingLeft: 5 }}
          >
            {item.title}
          </Text>
        </View>
        <Seperator />
      </View>
    );
  };

  return (
    <FlatList
      data={data.slice(0, 15)}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  seperate: {
    borderBottomWidth: 1,
    borderBottomColor: "blue",
  },
  comments: {
    textAlign: "center",
    padding: 20,
  },
});

export default App;
