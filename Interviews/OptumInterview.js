// Question1: 
/* You will be given a numeric array, need to show them in an unordered list, 
 and first number color should be red, and remaining numbers color should be green. */
 
// Code: 

import React, { Component } from "react";
import "./App.css";

const App = () => {
  const numericArray = [1, 2, 3, 4, 5];

  return (
    <div className="font-color">
      {numericArray.map((num) => (
        <ul>{num}</ul>
      ))}
    </div>
  );
};
export default App;

// CSS 
.font-color {
    font-size: 13px;
    color: green;
  }
  
  
  .font-color :first-child{
    color: red;
  }


// Question 2: 
/* You need to create to inputs & a submit button, user should be able to enter two numbers in those input boxes,
 once the user submits, we should show the sum of two numbers on the screen */

import React, { useState, Component } from "react";
import "./App.css";

const App = () => {
  const numericArray = [1, 2, 3, 4, 5];
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [finalSum, setFinalSum] = useState("");
  const handleInput1 = (e) => {
    console.log(e.target.value, "what here");
    setNumber1(e.target.value);
  };

  const handleInput2 = (e) => {
    console.log(e.target.value, "what here");
    setNumber2(e.target.value);
  };

  const handleSumbit = () => {
    console.log("here");
    setFinalSum(parseInt(number1) + parseInt(number2));
  };
  return (
    <div className="font-color">
      <div>{finalSum}</div>
      <input
        type="text"
        value={number1}
        onChange={(e) => handleInput1(e)}
        placeholder="number 1"
      />
      <input
        type="text"
        value={number2}
        onChange={(e) => handleInput2(e)}
        placeholder="number 2"
      />
      <button onClick={handleSumbit}>Add Number</button>
    </div>
  );
};
export default App;


// Question 3:
/* You have to create a input box in child component,
 whatever user enters in the input box should be visible the parent component */

// Parent Component:

 import React, { useState, Component } from "react";
import InputComponent from "./InputComponent";
import "./App.css";

const App = () => {
  const [inputText, setInputText] = useState("");
  const handleSetInputText = (e) => {
    setInputText(e);
  };
  return (
    <div className="font-color">
      <div>{inputText}</div>
      <InputComponent
        handleSetInputText={() => handleSetInputText()}
        inputText={inputText}
      />
    </div>
  );
};
export default App;

// Child Component

import React, { useState, Component } from "react";
import "./App.css";

const InputComponent = (handleSetInputText, inputText) => {
  const [finalSum, setFinalSum] = useState("");
  const sendData = () => {
  handleSetInputText(finalSum);
  };
  return (
    <div className="font-color">
      <input
        type="text"
        value={finalSum}
        onChange={(e) => {
          setFinalSum(e.target.value);
          sendData();
        }}
        placeholder="text box"
      />
    </div>
  );
};
export default InputComponent;