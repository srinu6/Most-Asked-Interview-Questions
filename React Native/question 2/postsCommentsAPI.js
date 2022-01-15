import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

const Seperator = () => {
  return <View style={styles.seperate} />;
};

function App() {
  const [data, setData] = useState([]);
  const [comment, setComment] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((c) => c.json())
      .then((cd) => setData(cd));
  }, []);

  const showComments = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((c) => c.json())
      .then((cd) => setComment(cd));
    console.log(comment.name);
  };

  const renderItem = ({ item }) => {
    return (
      <View>
        <TouchableOpacity onPress={() => showComments(item.id)}>
          <Text>{item.title}</Text>
        </TouchableOpacity>
        <Seperator />
      </View>
    );
  };

  const renderItem2 = ({ item }) => {
    return (
      <View>
        <Text>{item.name}</Text>
        <Seperator />
      </View>
    );
  };

  return (
    <View style={styles.app}>
      <FlatList
        data={data.slice(0, 8)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Seperator />
      <Seperator />
      <Text style={styles.comments}>Comments of Post {comment[0].postId}</Text>
      <Seperator />
      <Seperator />

      <FlatList
        data={comment}
        renderItem={renderItem2}
        keyExtractor={(item) => item.id}
      />
    </View>
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
