import { useState } from "react";
import "./styles.css";
import useCounterhook from "./useCounterhook";
//custom hook provides me value (counter)
//that can be used to display three play ,
//pause, reset.
function App() {
  const { hookCounter, handlePlay, handlePause, handleReset } =
    useCounterhook();

  return (
    <>
      <div className="one">{hookCounter}</div>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default App;
