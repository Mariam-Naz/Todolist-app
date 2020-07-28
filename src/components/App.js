import React, { useState } from "react";
import ToDoList from "./ToDoList";
import Button from "./Button";
import Heading from "./Heading";
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
        <Button addItem={addItem} />
      </div>
      <div>
        <ul>
          {items.map(todoItem => (
            <ToDoList todoItem = {todoItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
