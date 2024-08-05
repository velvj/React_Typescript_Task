type HeaderType = {
    children:string
}

const Header = (props:HeaderType) => {
    return (
<div>
    <h2>{props.children}</h2>
</div>
    )
}

export default Header;