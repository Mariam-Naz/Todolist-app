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

  function deleted(id){
    setItems(prevValue =>{
        return prevValue.filter((item , index)=>{
          return index !== id;
        })
    })
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
          {items.map((todoItem,index) => (
            <ToDoList key={index} id={index} todoItem = {todoItem} onChecked={deleted} />
          ))}
        </ul>
      </div>
    </div>
  );
}
export default App;