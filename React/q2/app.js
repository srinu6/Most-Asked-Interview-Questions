import React, { useState, Component } from "react";
import InputComponent from "./InputComponent";
import "./App.css";
import Accordion from "./Accordion";

const App = () => {
  const accor = [
    { content: "my first acc content", header: "1st acc header" },
    { content: "my second acc content", header: "2st acc header" },
    { content: "my third acc content", header: "3st acc header" },
  ];
  return (
    <div className="font-color">
      {accor.map((d) => (
        <Accordion content={d.content} header={d.header} />
      ))}
    </div>
  );
};
export default App;
