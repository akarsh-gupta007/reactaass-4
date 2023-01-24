import React,{useState} from "react";
import "./Style.css";
import Counter from "./Barbara";
const Counters = () => {
    const [counters, setCounters] = useState([0, 1, 2]);
    const [store, setStore] = React.useState([])
    const handlesubmit = () => {
        setStore(counters)
    }
    return (
        <div>
            <div className="main_container">
                <h1>Counter Lists</h1>
                {counters.map((value, index) => (
                    <Counter
                         index={index+1}
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
            <button className="Addbtn" onClick={() => { setCounters([...counters, 0])}}> Add counter</button>

            <div>
                <button className="submitbtn" onClick={() => { handlesubmit() }}>Submit</button>

            </div>

            <div className="result">
                <h1>Counter Result</h1>
                {store.map((values, index) => {
                    return (
                        <>
                            Counter {index + 1}:{values} <br/>
                        </>
                    )
                })}

            </div>
        </div>
    );
};
export default Counters;
