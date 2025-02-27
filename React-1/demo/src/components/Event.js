import React from 'react'


function Event() {
    const buttonClicked = () =>{
        console.log('Button was clicked');
        
    }

    return(
        <div>
            <h1>Event Handling</h1>
            <button onClick={buttonClicked}>Click Me!</button>
        </div>
    )
}

export default Event