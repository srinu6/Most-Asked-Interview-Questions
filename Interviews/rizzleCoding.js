import "./styles.css";
import { useState } from "react";

const debounce = (time, callback) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, time);
  };
};

export default function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const handleChange = (e) => {
    setSearch(e.target.value);
    const dee = debounce(200, getData);
    dee();
  };

  const getData = () => {
    const controller = new AbortController();
    const signal = controller.signal;
    if (signal) {
      controller.abort();
    }

    fetch("https://jsonplaceholder.typicode.com/comments", { signal })
      .then((data) => data.json())
      .then((d) => setData(d));
  };

  console.log(search, data, "hello");

  return (
    <div className="App">
      <input placeholder="name" onChange={(e) => handleChange(e)} />
    </div>
  );
}
