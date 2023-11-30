import { ReactNode } from 'react'
import Span from './Items'

const TitleLayout = ({ children, title, sub }: { children: ReactNode; title: string; sub?: string }) => {
  return (
    <>
      <Span fontSize="title">{title}</Span> <br />
      {sub && <Span fontSize="semi-title">sub</Span>}
      <div className="h-6"></div>
      <div className="p-4">{children}</div>
    </>
  )
}

export default TitleLayout
