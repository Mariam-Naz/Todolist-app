import React , {useState} from "react";

function ToDoList(props){
  const [isDone , setIsDone] = useState(false);

  function handleDelete(){
    setIsDone(prevValue=>{
      return !prevValue;
    });
  }
  return <div onClick={handleDelete}> 
  <li style={{textDecoration: isDone ? "line-through" : "none"}}>{props.todoItem}</li>
</div>
}

export default ToDoList;