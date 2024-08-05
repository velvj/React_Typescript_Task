type stylePropType = {
    style:React.CSSProperties
}

const StyleProp = (props:stylePropType) => {
    return (
        <div className="styles">
<p style={props.style}>welcome to vj world</p>
        </div>
    )
}

export default StyleProp;