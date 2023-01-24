import React from "react";
import ReactDOM from "react-dom";

const Counter = ({ value, onIncrement, onDecrement }) => {
  return (
    <div>
      {
        <button onClick={() => {onDecrement()}} >-</button>
      }
      <button><span>{value}</span></button>
      {
        <button onClick={() => {  onIncrement();}}>+</button>
      }
    </div>
  );
};


const Counters = () => {
  const [counters, setCounters] = React.useState([0, 1, 2]);


  return (
    <div>

      <div>
        {counters.map((value, index) => (
          <Counter
            onIncrement={() => {
              const countersCopy = [...counters];
              countersCopy[index] += 1;
              setCounters(countersCopy);
            }}
            value={value}
            onDecrement={() => {
              const countersCopy = [...counters];
              countersCopy[index] -= 1;
              setCounters(countersCopy);
            }}
          />
        ))}
      </div>

      <button onClick={() => {setCounters([...counters, 0]);}}> Add counter</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Counters />, rootElement);
