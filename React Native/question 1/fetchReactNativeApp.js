import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const Seperator = () => {
  return <View style={styles.seperate} />;
};

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Fake Data",
      username: "Bret",
      email: "fake@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
  ]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((c) => c.json())
      .then((cd) => setData(cd));
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View>
        <Text>{item.name} </Text>
        <Text style={styles.emailAlign}>{item.email}</Text>
        <Seperator />
      </View>
    );
  };
  return (
    <View style={styles.app}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  seperate: {
    borderBottomWidth: 1,
    borderBottomColor: "red",
  },
  emailAlign: {
    textAlign: "right",
  },
});

export default App;
