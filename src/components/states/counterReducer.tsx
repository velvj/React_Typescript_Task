import React, { useReducer } from "react";
const initialVal = { counts: 0 };
type states={
    counts:number
}
type actions={
    type:string
    payload:number
}

const reducer = (state:states, action:actions) => {
  switch (action.type) {
    case "increment":
      return { counts: state.counts + action.payload };
    case "decrement":
      return { counts: state.counts - action.payload };
    default:
      return state;
  }
};

const CounterReducer = () => {
  let [state, dispatch] = useReducer(reducer, initialVal);

  return (
    <>
      count:{state.counts}

    <button onClick={()=>dispatch({type:'increment',payload:10})}>+</button>
    <button onClick={()=>dispatch({type:'decrement',payload:10})}>-</button>
    </>
  );
};

export default CounterReducer;
