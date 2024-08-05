type OscarType={
    children:React.ReactNode
}

function Oscar  (props:OscarType)  {
    return (
        <div>
            <h2>{props.children}</h2>
        </div>
    )
}

export default Oscar;