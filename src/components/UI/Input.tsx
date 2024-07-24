import { InputHTMLAttributes } from "react"

interface IProp extends InputHTMLAttributes<HTMLInputElement>{}

const Input = ({...rest}: IProp) => {
    return (
        <input className="p-2 rounded-md mt-1 border border-gray-300 outline-none" {...rest} />
    )
}

export default Input