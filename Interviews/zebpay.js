import "./styles.css";
import React, { useRef, useEffect, useState } from "react";
const blocks = 5;
export default function App() {
  var timer;
  const containerRef = useRef(null);
  const blockElements = [];
  const [reqBlock, setReqBlock] = useState((Math.random() * 10) % blocks);
  const [highScore, setHighScore] = useState(0);
  const [sucess, setSucess] = useState(null);
  const [failure, setFailure] = useState(null);
  for (let i = 1; i <= blocks; i++) {
    blockElements.push(
      <div
        key={i}
        className={` ${i === reqBlock ? "active" : ""} ${
          i === sucess ? "green" : ""
        } ${i === failure ? "red" : ""} block`}
        id={i}
        onClick={() => handlePress(i)}
      ></div>
    );
  }

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
        {blockElements}
      </div>
      <button onClick={handleStart}>Start</button>
    </>
  );
}
// styles

// .App {
//     font-family: sans-serif;
//     text-align: center;
//     display: flex;
//     flex-direction: row;
//   }

//   .block {
//     width: 100px;
//     height: 100px;
//     border: 1px solid gray;
//   }

//   .active {
//     background-color: blue;
//   }

//   .green {
//     background-color: green;
//   }

//   .red {
//     background-color: red;
//   }

//   .startButton {
//     margin: 20px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

// Polyfill for Map

Array.prototype.myMap = function (call) {
  const newArray = [];
  for (let i = 0; i < this?.length; i++) {
    call(this[i]);
  }
};

[1, 2, 3].myMap((a) => console.log(a));
