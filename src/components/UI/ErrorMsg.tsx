interface IProp {
    msg : string
}

const ErrorMsg = ({msg}: IProp) => {
    return (
        msg ? <span className="text-red-600 font-semibold text-sm">{msg}</span> : null 
    )
}

export default ErrorMsg