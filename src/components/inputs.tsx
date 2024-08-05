type inputEventType = {
    value:string
    handleChange:(e:React.ChangeEvent<HTMLInputElement>,id:number) => void
}

const Inputs = (props:inputEventType) => {
    return (
        <div>
<input type="text" value={props.value} onChange={(e)=> props.handleChange(e,1)}/>
        </div>
    )
}

export default Inputs;