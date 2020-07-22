import React, {useState} from "react";

function App() {
const [item , setItemName] = useState(""); 
const [itemDisplay , setItemDisplay]=useState([]);
function handleChange(event){
  setItemName(event.target.value)
}
function display(){
  setItemDisplay(prevValue => {
  return [...prevValue,item];
  });
  setItemName("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={item} />
        <button onClick={display}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul> 
        {itemDisplay.map(itd=> 
        <li key={itd.toString()}>{itd}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
