import React, { useState } from "react";
type AuthUser = {
    Uname: string,
    email: string
}

const UserState = () => {
const [isLogIn,setIslogIn]=useState <AuthUser|null>(null)

const handleIn = ()=>{
    setIslogIn({
Uname:'vj',
email:'vj@gmail.com'
    })
}
const handleOut = ()=>{
    setIslogIn(null)
}

    return (
        <div>
            <button onClick={handleIn}>LogIn</button>
            <button onClick={handleOut}>LogOut</button>
            <div>user is {isLogIn?.Uname} and {isLogIn?.email}</div>

        </div>
    )
}


export default UserState;