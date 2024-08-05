import React from "react";
type StatusType ={
    status:'loading' | 'success' | 'err'
}

const Status = (props:StatusType) => {
    let STATUS;
if(props.status === 'loading') {
    STATUS='loading'
}else if (props.status === 'success'){
    STATUS='success'
}else if (props.status ===  'err'){
    STATUS='err'
}

    return (
        <div>
<h1>status of process is {STATUS}</h1>
        </div>
    )
}

export default Status;