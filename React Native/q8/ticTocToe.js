import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import Square from "./Square";

const win = (tic) => {
  console.log(tic);
};
function App() {
  const [tic, setTic] = useState(["1", "1", "1", "1", "1", "1", "1", "1", "1"]);
  const [xO, setXO] = useState(true);
  const setTicToc = (b) => {
    const ne = [...tic];
    if (xO) ne[b] = "O";
    else ne[b] = "X";
    setTic(ne);
    setXO(!xO);
    win(tic);
  };
  return (
    <View style={styles.app}>
      <Text style={styles.textBottom}> Tic Toc Toe</Text>
      <View style={styles.direction}>
        <Square id={tic[0]} block={0} setTicToc={setTicToc} />
        <Square id={tic[1]} block={1} setTicToc={setTicToc} />
        <Square id={tic[2]} block={2} setTicToc={setTicToc} />
      </View>
      <View style={styles.direction}>
        <Square id={tic[3]} block={3} setTicToc={setTicToc} />
        <Square id={tic[4]} block={4} setTicToc={setTicToc} />
        <Square id={tic[5]} block={5} setTicToc={setTicToc} />
      </View>
      <View style={styles.direction}>
        <Square id={tic[6]} block={6} setTicToc={setTicToc} />
        <Square id={tic[7]} block={7} setTicToc={setTicToc} />
        <Square id={tic[8]} block={8} setTicToc={setTicToc} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500,
    paddingTop: 20,
  },
  logo: {
    height: 80,
  },
  header: {
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center",
  },
  direction: {
    flexDirection: "row",
  },
  textBottom: {
    paddingBottom: 20,
  },
});

export default App;
