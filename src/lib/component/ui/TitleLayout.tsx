import { ReactNode } from 'react'
import Span from './Items'

interface ITitleLayoutProps {
  children: ReactNode
  title: string
  sub?: string
  padding?: boolean
}

const TitleLayout = ({ children, title, sub, padding = true }: ITitleLayoutProps) => {
  return (
    <div className="p-6">
      <div className="flex flex-row items-end h-fit">
        <Span fontSize="title" bold="bold" className="flex-none">
          {title}
        </Span>
        {sub && (
          <Span fontSize="semi-title" className="flex-1 h-full px-2 overflow-clip">
            {sub}
          </Span>
        )}
      </div>
      <div className="h-10"></div>
      <div className={`${padding && 'p-4'}`}>{children}</div>
    </div>
  )
}

export default TitleLayout
