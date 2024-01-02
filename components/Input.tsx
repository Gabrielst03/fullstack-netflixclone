import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
}

const Input = ({ ...rest }: Props) => {
    return (
        <input {...rest} className='p-2 rounded bg-zinc-700 outline-none' />
    );
}

export default Input;