import React, { useState } from "react";
type AuthUser = {
    Uname:string
    email:string
}

const UserTypeAssertion = () => {
const [userlog,setUserlog]=useState <AuthUser>({} as AuthUser)
const  handleIn= ()=>{
    setUserlog({
        Uname:'vj01',
        email:"vj01@gmail.com"

    })
}
const  handleOut= ()=>{
    setUserlog({Uname:'guest',email:'guest01@gmail.com'})
}

    return (
        <div>
<button onClick={handleIn}>login</button>
<button onClick={handleOut}>logout</button>
<div>user is {userlog.Uname} and {userlog.email}</div>
        </div>
    )
}

export default UserTypeAssertion;