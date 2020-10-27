import React, { useState, useEffect } from "react";
import "./App.css";
import AddItems from "./components/AddItems";

function App() {
  const [counter, setCounter] = useState(0);
  const [list, setList] = useState(["hello", "bonjour"]);

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const add = (x) => setList([...list, x]);


//ComponentDidMount
  // useEffect(() => {
  //   console.log("effect");
  // }, []);


  //ComponentDidUpdate
  useEffect(() => {
    console.log("effect");
  }, [counter]);

  return (
    <div className="App">
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <h2>{counter}</h2>
      <button onClick={decrement}>-</button>
      {/* <AddItems add={add} /> */}
      {/* {list.map((el, i) => (
        <h3 key={i}>{el}</h3>
      ))} */}
    </div>
  );
}

export default App;
