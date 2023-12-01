import ProjectCard from '../component/ProjectCard'
import TitleLayout from '../component/ui/TitleLayout'

import data from '../data/data'

const Projects = () => {
  return (
    <TitleLayout title="Projects" padding>
      <div className="flex flex-wrap justify-between gap-4 ">
        {data.Projects.map((x) => (
          <ProjectCard project={x} key={x.projectName} />
        ))}
      </div>
    </TitleLayout>
  )
}

export default Projects
