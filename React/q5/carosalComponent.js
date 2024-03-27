// Need to write properly.

import React, { useState, Component, useRef } from "react";

import "./App.css";
const images = [
  "https://source.unsplash.com/fk4tiMlDFF0/900x600/",
  "https://source.unsplash.com/TzjMd7i5WQI/900x600/",
  "https://source.unsplash.com/-Go4DH2pZbc/900x600/",
];
const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    if (activeIndex === 0) {
      setActiveIndex(images.length - 1);
    } else {
      setActiveIndex((pre) => pre - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex === images.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((pre) => pre + 1);
    }
  };

  return (
    <div className="carosol-container">
      <div onClick={handlePrev}>Prev </div>
      {images.map(
        (url, index) =>
          index === activeIndex && (
            <div
              className={`image-class ${
                index === activeIndex ? "active" : "block"
              }`}
            >
              <img src={url} className="single-image" alt="tiniest puppy" />
            </div>
          )
      )}
      <div onClick={handleNext}>Next </div>
    </div>
  );
};
export default App;
