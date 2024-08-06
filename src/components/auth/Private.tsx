import { Login } from "./Login";
import { ProfileProps } from "./Profile";

type privateProps ={
    isLoggedIn:boolean
    component:React.ComponentType<ProfileProps>
}

export const Private = ({isLoggedIn,component:Component}:privateProps) =>{
    if(isLoggedIn){
        return <Component name='vj'/>
    }else{
return <Login/>
    }
}