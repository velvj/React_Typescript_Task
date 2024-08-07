type ButtonProps={
    variant:'primary'|'secondary'
    children:string
} & Omit< React.ComponentProps<'button'>,'children'>

const CustomButtion = ({variant,children,...rest}:ButtonProps) =>{
    return (
        <div>
            <button className={`class-with-${variant} {...rest}`}>{children}</button>
        </div>
    )
}

export {CustomButtion}