import { useContext } from "react";
import {userContextData} from '../../components/contextes/userContext';

const User = () => {
    const userContext = useContext(userContextData)
    const handleLogin = () =>{
if(userContext){
    userContext.setUser({
        Uname:'vj',
        email:'vj2@gmail.com'
    })
}
    }
    const handleLogout = () => {
        if(userContext){
            userContext.setUser(null)
        }
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {userContext.user?.Uname}</div>
            <div>User email is {userContext.user?.email}</div>
        </div>
    )
}

export {User};