import React from "react";
import {personType} from './personType';

const Person = (props:personType) => {
    const {fname,lname}=props.Username
    return (
        <div>
<h2>welcome {fname} {lname}</h2>
        </div>
    )
}

export default Person;