import Span from './ui/Items'
import images from '../utils/projectImages'
import { Link } from 'react-router-dom'

export interface IProjectContent {
  project: {
    projectName: string
    title: string
    sub: string
    roll: string[]
    skills: string[]
    period: string[]
    from: string
    urls: { deploy?: string; github?: string }
    WID: {
      title: string
      detail?: string[]
    }[]
  }
}

const ProjectCard = ({ project }: IProjectContent) => {
  return (
    <Link
      to={`/Projects/${project.projectName}`}
      className="w-[45%] aspect-square border border-neutral-500 p-2 rounded-md bg-white hover:bg-neutral-200"
    >
      <div className="w-full h-3/5">
        {images.logo[project.projectName] ? (
          <img src={images.logo[project.projectName]} alt="project-logo" className="object-scale-down w-full h-full" />
        ) : (
          []
        )}
      </div>
      <div className="w-full mt-2">
        <Span fontSize="semi-title" bold="semi-bold" className="block">
          {project.projectName}
        </Span>
        <Span fontSize="detail">{project.sub}</Span>
      </div>
    </Link>
  )
}

export default ProjectCard
