import { useNavigate } from 'react-router-dom'
import WIDList from '../component/WIDList'
import Span from '../component/ui/Items'
import KeyVal from '../component/ui/KeyVal'
import Space from '../component/ui/Spacing'
import data from '../data/data'
import images from '../utils/projectImages'

interface IProjectDetail {
  project: string
}

const ProjectDetail = ({ project }: IProjectDetail) => {
  const router = useNavigate()
  const curData = data.Projects.filter((x) => x.projectName === project)[0]

  return (
    <div className="relative">
      {images.banner[project] && (
        <img src={images.banner[project]} alt="project-banner" className="object-cover w-full h-44" />
      )}
      <div className="px-4">
        <div className="flex flex-col gap-1">
          <Space direction="vertical" space={4} />
          <Span fontSize="title" bold="semi-bold" className="block">
            {curData.title}
          </Span>
          <Space direction="vertical" space={4} />
          <Span fontSize="semi-title" bold="semi-bold">
            {curData.sub}
          </Span>
          {curData.urls.deploy && (
            <KeyVal title="배포 Url">
              <Span fontSize="basic">
                <a href={curData.urls.deploy}>{curData.urls.deploy}</a>
              </Span>
            </KeyVal>
          )}
          {curData.urls.github && (
            <KeyVal title="Github">
              <Span fontSize="basic">
                <a href={curData.urls.github}>{curData.urls.github}</a>
              </Span>
            </KeyVal>
          )}
        </div>
        <Space direction="vertical" space={4} />
        <hr className="border-black border-dashed" />
        <Space direction="vertical" space={4} />
        <div className="flex flex-row">
          <div className="flex flex-col w-1/2 gap-2 px-1">
            <KeyVal title="역할">
              <div className="flex flex-wrap gap-1">
                {curData.roll.map((x) => (
                  <Span fontSize="detail" styletype="item" key={x}>
                    {x}
                  </Span>
                ))}
              </div>
            </KeyVal>
            <KeyVal title="기간">
              <Span fontSize="basic">{curData.period[0] + ' - ' + curData.period[1]}</Span>
            </KeyVal>
            <KeyVal title="소속">
              <Span fontSize="basic">{curData.from}</Span>
            </KeyVal>
          </div>
          <div className="w-1/2">
            <KeyVal title="Skills">
              <div className="flex flex-wrap gap-1">
                {curData.skills.map((x) => (
                  <Span fontSize="detail" styletype="item" key={x}>
                    {x}
                  </Span>
                ))}
              </div>
            </KeyVal>
          </div>
        </div>
        <Space direction="vertical" space={4} />
        <hr className="border-black border-dashed " />
        <Space direction="vertical" space={4} />
        <div>
          <Span fontSize="semi-title" bold="semi-bold" className="mb-4">
            기여한 부분
          </Span>

          <WIDList wid={curData.WID} />
        </div>
      </div>
      <button
        onClick={() => router(-1)}
        className="absolute top-0 left-0 px-2 text-base border-b border-r border-black border-dashed hover:bg-neutral-200"
      >
        back to list
      </button>
    </div>
  )
}

export default ProjectDetail
