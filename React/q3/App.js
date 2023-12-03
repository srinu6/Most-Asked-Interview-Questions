import { useEffect, useState } from "react";
import "./styles.css";
import Comments from "./Comments";
export default function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/ac8a4f83-b8d7-4e26-98ec-8c3f1d98cc2f")
      .then((d) => d.json())
      .then((data) => {
        console.log(data, "");
        setComments(data);
      });
  }, []);
  return (
    <div className="App">
      <Comments com={comments} />
    </div>
  );
}
