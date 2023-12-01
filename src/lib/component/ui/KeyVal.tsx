import { ReactNode } from 'react'
import Span from './Items'

const KeyVal = ({ title, children }: { title: string; children: ReactNode }) => {
  return (
    <div className="flex gap-2">
      <Span fontSize="basic" bold="semi-bold" className="min-w-max">
        {title + ' : '}
      </Span>
      {children}
    </div>
  )
}

export default KeyVal
