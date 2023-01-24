import React from "react";
import "./Style.css"
const Counter = ({ index,value, onIncrement, onDecrement }) => {
  return (
    <div id="maincounter">
     Counter: {index}
      {
        <button id="btn" onClick={() => {onDecrement()}} >-</button>
      }
        {/* <button></button> */}
        <span id="value">{value}</span>
      {
        <button id="btn" onClick={() => { onIncrement();}}>+</button>
      }
    </div>
  );
};
export default Counter;