import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";

// Contacts app
export default function ToDoList() {
  const [data, setData] = useState([
    { name: "Fake Name", number: "901432", email: "ved@gmail.com" },
  ]);
  const [nameAgeEmail, setNameAgeEmail] = useState({
    name: "",
    number: "",
    email: "",
  });
  const handleChangeName = (event) => {
    setNameAgeEmail({ ...nameAgeEmail, name: event });
  };
  const handleChangeNumber = (event) => {
    setNameAgeEmail({ ...nameAgeEmail, number: event });
  };
  const handleChangeEmail = (event) => {
    setNameAgeEmail({ ...nameAgeEmail, email: event });
  };
  const addToDo = () => {
    setData([
      ...data,
      {
        name: nameAgeEmail.name,
        number: nameAgeEmail.number,
        email: nameAgeEmail.email,
      },
    ]);
    setNameAgeEmail({ name: "", number: "", email: "" });
  };
  return (
    <View style={styles.container}>
      <Text
        style={{ textAlign: "center", paddingBottom: 20, fontWeight: "bold" }}
      >
        Add Contacts
      </Text>
      <TextInput
        style={{
          borderColor: "#000000",
          borderWidth: 1,
          marginBottom: 20,
          paddingLeft: 5,
        }}
        placeholder="Name"
        onChangeText={(e) => handleChangeName(e)}
        id="name"
        value={nameAgeEmail.name}
      />
      <TextInput
        style={{
          borderColor: "#000000",
          borderWidth: 1,
          marginBottom: 20,
          paddingLeft: 5,
        }}
        placeholder="phone no."
        onChangeText={(e) => handleChangeNumber(e)}
        id="number"
        value={nameAgeEmail.number}
      />
      <TextInput
        style={{
          borderColor: "#000000",
          borderWidth: 1,
          marginBottom: 20,
          paddingLeft: 5,
        }}
        placeholder="email"
        onChangeText={(e) => handleChangeEmail(e)}
        id="email"
        value={nameAgeEmail.email}
      />
      <View style={{ paddingTop: 5, paddingBottom: 10 }}>
        <Button title="Save Contact" onPress={() => addToDo()} />
      </View>
      <Text
        style={{
          textAlign: "center",
          paddingBottom: 20,
          paddingTop: 10,
          fontWeight: "bold",
        }}
      >
        My Contacts
      </Text>
      <View
        style={{
          borderWidth: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "gray",
        }}
      >
        <Text>Name</Text>
        <Text>Number</Text>
        <Text>Email</Text>
      </View>
      <ScrollView>
        {data.map((item) => (
          <View
            style={{
              borderWidth: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text>{item.name}</Text>
            <Text>{item.number}</Text>
            <Text>{item.email}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 60,
  },
});
