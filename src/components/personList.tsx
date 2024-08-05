import React from "react";

type PersonListType = {
    names:{
        first:string
        last:string
    }[]
}

const PersonList = (props:PersonListType) =>{
    
    return (
        <div>
{
    props.names.map((val,index)=>{
        return (
            <h2 key={index}>{val.first} {val.last}</h2>
        )
    })
}
        </div>
    )
}

export default PersonList;