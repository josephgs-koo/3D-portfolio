import { ButtonHTMLAttributes } from 'react'

interface IBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Btn = (props: IBtnProps) => {
  return <button {...props}>{props.children}</button>
}

export default Btn
