import React from "react";
import Greet from "../greet";


const CustomComponent = (props:React.ComponentProps<typeof Greet>)=>{
    return (
        <div>
            {props.Uname}
            {props.countMsg}
        </div>
    )
}
export {CustomComponent};