import React from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

function Square({ id, block, setTicToc }) {
  return (
    <TouchableOpacity style={styles.app} onPress={() => setTicToc(block)}>
      <Text>{id !== "1" ? id : ""}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  app: {
    width: 50,
    height: 50,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Square;
