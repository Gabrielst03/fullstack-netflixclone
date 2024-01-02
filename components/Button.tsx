import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
}

const Button = ({ children, ...rest }: Props) => {
    return (
        <button {...rest} className='p-2 rounded hover:bg-red-800 transition-colors bg-red-700 font-medium'>{children}</button>

    );
}

export default Button;