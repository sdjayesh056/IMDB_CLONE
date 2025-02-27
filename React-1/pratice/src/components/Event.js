import React from "react";


function Event() {

    const clickButton = ()=>{
        console.log('Button was Clicked!');
        
    }

    return(
        <div>
            <h3>Event Handling</h3>
            <button onClick={clickButton}>Click Button</button>
        </div>
    )
}

export default Event