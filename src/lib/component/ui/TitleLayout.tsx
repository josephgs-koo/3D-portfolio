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
    <>
      <Span fontSize="title" bold="bold">
        {title}
      </Span>
      {sub && (
        <Span fontSize="semi-title" className="p-2">
          {sub}
        </Span>
      )}
      <div className="h-10"></div>
      <div className={`${padding && 'p-4'}`}>{children}</div>
    </>
  )
}

export default TitleLayout
