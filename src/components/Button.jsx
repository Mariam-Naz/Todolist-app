import React from "react";
function Button(props){
  return   <button onClick={props.addItem}>
  <span>Add</span>
</button>
}

export default Button;