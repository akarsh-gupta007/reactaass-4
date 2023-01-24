import React, { useState } from 'react'

const Counter = () => {

    const [increment, setIncrement] = useState(0)
    return (
        <div>
            
          <span>
               count 
            </span>  <button onClick={() => setIncrement(increment+1)}> Increment</button>{increment}
            <button onClick={() => setIncrement(increment-1)}> Decrement</button>


        </div>
    )
}

export default Counter
