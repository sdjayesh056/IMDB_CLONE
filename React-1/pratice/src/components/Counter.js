import React, { useState } from "react";

function Counter() {

    const[count, setCount] = useState(0)

    function Increment() {
        setCount(count+1)
    }

    function Decrement() {
        if (count===0) {
            setCount(count)
        } else {
            setCount(count-1)
        }
    }
    return(
        <div>
            <h1>The count is {count}</h1>
            <button onClick={Increment}>Increment</button> <button onClick={Decrement}>Decrement</button>
        </div>
    )
}

export default Counter