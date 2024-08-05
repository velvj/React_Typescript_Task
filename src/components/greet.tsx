import React from "react";

type propsType ={
    Uname:string
    countMsg?:number
    loggedIn:boolean

}

const Greet = (props:propsType) => {
    let {countMsg =0}=props
 return (
    <div>
{ props.loggedIn ? <h2>welcome {props.Uname}. you have {countMsg} Msg</h2>: <h2>welcome guest </h2>}

    </div>
 )   
}

export default Greet ;