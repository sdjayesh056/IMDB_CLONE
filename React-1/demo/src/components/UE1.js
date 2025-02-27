import React, { useEffect, useState } from "react";

function UE1() {

    const [count, setCount] = useState(0)

    function incrementCount() {
        setCount(count+1)
    }

    // Syntax of useEffect


    // Component Mounting and Component Updation
    // useEffect(()=>{
    //     console.log('use Effect Runs');
    //     document.title = `Button clicked for ${count} times`
    // })

    // console.log('Other code that gets executed');
    

    // Only Component Mounting
    useEffect(()=>{
        console.log('use Effect Runs');
        document.title = `Button clicked for ${count} times`
    }, [] )

    console.log('Other code that gets executed');


    return(
        <div>
            <h1>This is my Count value : {count}</h1>
            <button onClick={incrementCount}>Increment</button>
        </div>
    )
}

export default UE1