import { useState } from "react";
import "./styles.css";

export default function App() {
  const [ina, setIn] = useState("");
  const [show, setShow] = useState("");
  function debounce(callback, timer) {
    let timerID;

    return function () {
      const args = arguments;
      console.log(args, "what args");
      clearTimeout(timerID);
      timerID = setTimeout(function () {
        callback.apply(this, args);
      }, timer);
    };
  }
  const st = (fv) => {
    setShow(ina);
  };
  const deVer = debounce(st, 1000);
  const handleChange = (e) => {
    setIn(e.target.value);
    deVer(5);
  };
  return (
    <div className="App">
      <input onChange={handleChange} placeholder="de" value={ina} />
      <div>{show}</div>
    </div>
  );
}
