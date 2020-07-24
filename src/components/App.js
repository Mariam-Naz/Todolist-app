import React, { useState } from "react";
import Heading from "./Heading";
import Button from "./Button";
import List from "./List";
function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <Heading />
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
      <Button addItem = {addItem}/>
      </div>
      <div>
        <List items = {items} />
      </div>
    </div>
  );
}

export default App;
