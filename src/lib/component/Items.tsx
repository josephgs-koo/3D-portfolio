import { HTMLAttributes, ReactNode } from 'react'
import { FONTSIZE } from '../style/styleOpt'

interface ISpanProps extends HTMLAttributes<HTMLSpanElement> {
  fontSize: keyof typeof FONTSIZE
  styletype?: keyof typeof STYLE
  className?: string
}

const STYLE = {
  item: 'px-4 py-1 rounded-full bg-neutral-200 inline-block',
} as const

const Span = (props: ISpanProps) => {
  return (
    <span
      {...props}
      className={`${FONTSIZE[props.fontSize]} ${props.styletype && STYLE[props.styletype]} ${props.className}`}
    >
      {props.children}
    </span>
  )
}

export default Span
