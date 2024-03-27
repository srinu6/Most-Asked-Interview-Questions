import "./styles.css";
import React, { useRef, useEffect, useState } from "react";
const blocks = 5;
export default function App() {
  var timer;
  const containerRef = useRef(null);
  const blockElements = [];
  for (let i = 1; i <= blocks; i++) {
    blockElements.push(<div className="block"></div>);
  }
  const [reqBlock, setReqBlock] = useState((Math.random() * 10) % blocks);
  const [highScore, setHighScore] = useState(0);
  const [sucess, setSucess] = useState(null);
  const [failure, setFailure] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("highscores") < highScore) {
      localStorage.setItem("highscores", highScore);
    }
  }, [highScore]);

  const handleStart = () => {
    timer = setInterval(() => {
      const random = parseInt((Math.random() * 10) % blocks);

      // const reqElement = document.getElementById(random);
      // reqElement.style.backgroundColor = "#0000FF";
      // console.log(reqElement.style);
      setReqBlock(random);
      setSucess(null);
      setFailure(null);
    }, 1000);
  };

  const handlePress = (index) => {
    if (index === reqBlock) {
      setHighScore((prev) => prev + 1);
      setSucess(index);
    } else {
      setFailure(index);
    }
  };

  console.log(reqBlock);
  useEffect(() => {
    return () => {
      clearInterval(timer);
      //localStorage.setItem
    };
  }, []);

  return (
    <>
      <div>local:{highScore}</div>
      <div>HighScore:{localStorage.getItem("highscores") || 0}</div>
      <div ref={containerRef} className="App">
        {blockElements?.map((bl, index) => {
          return (
            <div
              key={index}
              className={`${index === reqBlock ? "active" : ""} ${
                index === sucess ? "green" : ""
              } ${index === failure ? "red" : ""}`}
              id={index}
              onClick={() => handlePress(index)}
            >
              {bl}
            </div>
          );
        })}
      </div>
      <button onClick={handleStart}>Start</button>
    </>
  );
}

// Polyfill for Map

Array.prototype.myMap = function (call) {
  const newArray = [];
  for (let i = 0; i < this?.length; i++) {
    call(this[i]);
  }
};

[1, 2, 3].myMap((a) => console.log(a));
