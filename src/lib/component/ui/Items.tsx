import { HTMLAttributes, ReactNode } from 'react'
import { FONTSIZE } from '../../style/styleOpt'

interface ISpanProps extends HTMLAttributes<HTMLSpanElement> {
  fontSize: keyof typeof FONTSIZE
  styletype?: keyof typeof STYLE
  bold?: keyof typeof BOLD
  className?: string
}

const STYLE = {
  item: 'px-4 py-1 rounded-full bg-neutral-200 inline-block',
} as const

const BOLD = {
  normal: 'font-normal',
  bold: 'font-bold',
  'semi-bold': 'font-semibold',
}

const Span = ({ bold = 'normal', fontSize, styletype, className, ...props }: ISpanProps) => {
  return (
    <span {...props} className={`${FONTSIZE[fontSize]} ${styletype && STYLE[styletype]} ${BOLD[bold]} ${className}`}>
      {props.children}
    </span>
  )
}

export default Span
