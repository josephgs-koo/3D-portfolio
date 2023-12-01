import { HTMLAttributes } from 'react'

interface ISpaceProps extends HTMLAttributes<HTMLDivElement> {
  direction: keyof typeof OPT
  space: keyof typeof OPT.horizontal
}

const OPT = {
  horizontal: {
    4: 'w-4',
    10: 'w-10',
  },
  vertical: {
    4: 'h-4',
    10: 'h-10',
  },
}

const Space = (props: ISpaceProps) => {
  return <div className={`${OPT[props.direction][props.space]}`} />
}

export default Space
