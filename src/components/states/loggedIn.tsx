import React, { useState } from "react";

const LoggedIn = () => {
    let [userLog,setUserLog]=useState(false)
const handlelogin= ()=>{
    console.log('true',true)
    setUserLog(true)
}
const handlelogout= ()=>{
    console.log('false',false)

    setUserLog(false)
}

    return (
        <div>
<button onClick={handlelogin}>login</button>
<button onClick={handlelogout}>logout</button>
<div>user is {userLog?'logged in':'logged out'}</div>
        </div>
    )
}

export default LoggedIn;
