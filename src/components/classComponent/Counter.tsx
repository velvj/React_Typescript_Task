import { Component } from "react";

type counterProps={
    message:string
}
type CounterState = {
    count:number
}

export class Counter extends Component <counterProps,CounterState>{
    state = {
        count:0,
    }

    handleClick =()=>{
        this.setState((prevState)=>({count:prevState.count + 1}))
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>increment</button>
                {this.props.message} {this.state.count}
            </div>
        );
    }
}