import React, { useEffect, useState } from "react";

const useCounterhook = () => {
  const [hookCounter, sethookCounter] = useState(0);
  const [counterRunning, setCounterRunning] = useState(false);

  const handlePlay = () => {
    setCounterRunning(true);
  };

  const handlePause = () => {
    setCounterRunning(!counterRunning);
  };

  const handleReset = () => {
    setCounterRunning(false);
    sethookCounter(0);
  };

  useEffect(() => {
    let timer;
    if (counterRunning) {
      timer = setInterval(() => {
        sethookCounter((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [counterRunning]);

  return { hookCounter, handlePlay, handlePause, handleReset };
};
export default useCounterhook;
