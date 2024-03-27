import React, { useState, forwardRef } from "react";

import "./App.css";

const InputComponent = forwardRef(({ handleSetInputText, inputText }, ref) => {
  const [finalSum, setFinalSum] = useState("");

  const sendData = (e) => {
    handleSetInputText(e);
  };

  return (
    <div className="font-color">
      <input
        ref={ref}
        type="text"
        value={finalSum}
        onChange={(e) => {
          setFinalSum(e.target.value);
          sendData(e.target.value);
        }}
        placeholder="text box"
      />
    </div>
  );
});
export default InputComponent;
