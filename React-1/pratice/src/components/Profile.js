import React from "react";

function Profile(props) {

    console.log(props);
    

    return(
        <div>
            <h3>Name : {props.name}, Age : {props.age}, Occupation : {props.occupation}, Salary : {props.salary}</h3>
        </div>
    )
}


export default Profile