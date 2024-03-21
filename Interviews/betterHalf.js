// flatlist, flatlast internal mechanisam - Vertulization
// Flashlist
// React.memo -- uses useCallback as internal implementation?

// counter

import react, { useEffect, useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);
  const [runTimer, setRunTimer] = useState(false);

  const handlePause = () => {
    setRunTimer(false);
  };

  const handleStart = () => {
    setRunTimer(true);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (runTimer) {
        setCount((prev) => prev + 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [count, runTimer]);

  return { count, handlePause, handleStart };
};

//////////////////////////////////////////////////////

import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const App = () => {
  const { count, handlePause, handleStart } = useCounter();
  return (
    <View>
      <Text>{count}</Text>
      <Button onPress={() => handleStart("START")} title="Start" />
      <Button onPress={() => handlePause("PAUSE")} title="Pause" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
