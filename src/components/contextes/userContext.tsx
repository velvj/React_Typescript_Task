import React,{ createContext, useState} from "react";

type usercontextProps={
    children:React.ReactNode
}
type AuthUser = {
    Uname:string
    email:string
}
type stateData= {
    user:AuthUser|null
    setUser:React.Dispatch<React.SetStateAction<AuthUser | null>>
}
const userContextData=createContext({} as stateData)

const UserContext = ({children}:usercontextProps)=>{
    const [user,setUser]=useState<AuthUser|null>(null)
   
    return (
        <userContextData.Provider value={{user,setUser}}>{children}</userContextData.Provider>
            
    )
        } 

export {UserContext,userContextData}