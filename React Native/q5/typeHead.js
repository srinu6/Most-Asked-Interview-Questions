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

// Create a typeahead component
export default function UsersData() {
  const [data, setData] = useState([]);
  const [newdata, setnewData] = useState("");
  const se = [
    "Srinu",
    "saradha",
    "Chiran",
    "Sri",
    "Lasya",
    "Sita",
    "ram",
    "Bala",
  ];

  const handleChange = (e) => {
    setnewData(e);
    const res = [];
    se.forEach((s) => {
      if (s.substring(0, e.length).toUpperCase() === e.toUpperCase()) {
        res.push(s);
      }
    });

    setData(res);
  };

  const handleValue = (e, d) => {
    console.log(e, "whe");
    setnewData(d);
  };
  return (
    <View style={style.mainContent}>
      <TextInput
        placeholder="text"
        style={style.input}
        onChangeText={(e) => handleChange(e)}
        value={newdata}
      />
      {data.map((d) => {
        return (
          <TouchableOpacity onPress={(e) => handleValue(e, d)}>
            <Text>{d}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const style = StyleSheet.create({
  mainContent: {
    flex: 1,
    backgroundColor: "white",
  },
  input: {
    borderWidth: "1px",
    margin: "12px",
    padding: "12px",
  },
});
