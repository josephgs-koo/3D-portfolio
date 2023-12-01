import { ReactNode } from 'react'
import images from '../../utils/projectImages'
import Span from './Items'
import { IProjectContent } from '../ProjectCard'

interface IProjectLayoutProps {
  data: IProjectContent
  project: string
  children: ReactNode
}

const ProjectLayout = ({ project, children, data }: IProjectLayoutProps) => {
  return (
    <div>
      <div>
        {images.banner[project] && <img src={images.banner[project]} alt="project-banner" className="w-full h-44" />}
        <Span fontSize="title" bold="semi-bold"></Span>
        <Span fontSize="basic"></Span>
      </div>
      <div>{children}</div>
    </div>
  )
}

export default ProjectLayout
