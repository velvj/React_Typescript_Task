import { useReducer } from "react";
import React  from "react";

type states={
    count:number
}

type actions = {
    type:'increment'|'decrement'|'reset'
    payload:number
}
type updateActions = {
    type:'reset'
}

type discriminated_Unions=actions|updateActions

const initalState={count:0}

const reducer=(state:states,action:discriminated_Unions)=>{
    switch(action.type){
case 'increment':return {count:state.count+action.payload}
case 'decrement':return {count:state.count-action.payload}
case 'reset': return  initalState
default: return state
    }

}

const StrictReducer = () => {
    const [state,dispatch]=useReducer(reducer,initalState)
    return(
        <div>
        <button onClick={()=>dispatch({type:'increment',payload:10})} >+</button>
        <h1>Count:{state.count}</h1>
        <button onClick={()=>dispatch({type:'decrement',payload:10})} >-</button>
        <button onClick={()=>dispatch({type:'reset'})} >reset</button>
        </div>
    )
}

export default StrictReducer;