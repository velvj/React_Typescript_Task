type RandomNumberType={
    value:number
}
type PositiveType= RandomNumberType &{
    isPositive:boolean
    isNegative?:never
    isZero?:never
}
type NegativeType=RandomNumberType &{
    isPositive?:never
    isNegative:boolean
    isZero?:never
}
type ZeroType=RandomNumberType &{
    isPositive?:never
    isNegative?:never
    isZero:boolean
}

type RandomNumbersTypes = PositiveType|NegativeType|ZeroType
type RandomNumberProps = {
    value:number
    isPositive?:boolean
    isNegative?:boolean
    isZero?:boolean
}

const RandomNumber = ({value,isPositive,isNegative,isZero}:RandomNumbersTypes) =>{
    return (
        <div>
{value} {isPositive && 'positive'} {isNegative && 'negative'} {''} {isZero && 'zero'}
        </div>
    )
}

export {RandomNumber};