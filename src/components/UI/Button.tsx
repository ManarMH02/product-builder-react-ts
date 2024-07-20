import { ButtonHTMLAttributes, ReactNode } from "react"

interface IProp extends ButtonHTMLAttributes<HTMLButtonElement> {
    className: string,
    children?: ReactNode,
    width: "w-full" | "w-fit"
}

const Button = ({className, children, width, ...rest}: IProp) => {
    return (
        <button
            className={`p-2 text-white rounded-md ${className} ${width}`}
            {...rest}
        >
            {children}
        </button>
    )
}
~
export default Button