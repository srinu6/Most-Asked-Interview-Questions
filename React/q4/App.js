// Access child element in parent element. Child data in parent element.
// Can we solved with both callback function and useRef, forwardRef

import React, { useState, Component, useRef } from "react";
import InputComponent from "./InputComponent";
import "./App.css";

const App = () => {
  const [inputText, setInputText] = useState("");
  const handleSetInputText = (e) => {
    setInputText(e);
  };
  const inputRef = useRef(null);
  console.log(inputRef?.current?.value, "try to access whole Input DOM");

  return (
    <div className="font-color">
      <div>{inputText}</div>
      <InputComponent
        ref={inputRef}
        handleSetInputText={handleSetInputText}
        inputText={inputText}
      />
    </div>
  );
};
export default App;
