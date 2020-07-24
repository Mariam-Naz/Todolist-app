import React from "react";

function List(props){
  return <ul>
  {props.items.map(todoItem => (
    <li>{todoItem}</li>
  ))}
</ul>
}

export default List;