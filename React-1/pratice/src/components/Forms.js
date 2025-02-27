import React, { useState } from "react";

function Forms() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setlastName] = useState('')

    let handleFirstName = (e)=>{
        setFirstName(e.target.value)
    }

    let handleLastName = (e) =>{
        setlastName(e.target.value)
    }

    let handleSubmit = (e) =>{
        e.preventDefault()
        console.log(firstName, lastName);
        
    }

    return(
        <div>
            <h3>Form Input</h3>
            <form onSubmit={handleSubmit}>
                <label>FirstName : </label>
                <input onChange={handleFirstName} type="text" value={firstName}></input><br></br>
                <label>LastName : </label>
                <input onChange={handleLastName} type="text" value={lastName}></input>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Forms