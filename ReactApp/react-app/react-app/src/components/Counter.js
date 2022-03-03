import React, { useState } from 'react'

function Counter() {
    const [ counter, setCounter ] = useState(0)
  return (
    <div>
       <h2> This is a counter app </h2>
      <button id="increment-btn" onClick={() => setCounter(counter + 1)}>Increment</button>
      <button id="decrement-btn" onClick={() => setCounter(counter - 1)}>Decrement</button>
      <div id="counter-value" >{counter}</div> 
    </div>
  )
}

export default Counter