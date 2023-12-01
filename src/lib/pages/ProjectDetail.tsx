import WIDList from '../component/WIDList'
import Span from '../component/ui/Items'
import KeyVal from '../component/ui/KeyVal'
import TitleLayout from '../component/ui/TitleLayout'
import data from '../data/data'
import images from '../utils/projectImages'

interface IProjectDetail {
  project: string
}

const ProjectDetail = ({ project }: IProjectDetail) => {
  const curData = data.Projects.filter((x) => x.projectName === project)[0]
  return (
    <div className="relative">
      <div className="flex flex-col gap-1">
        {images.banner[project] && (
          <img src={images.banner[project]} alt="project-banner" className="object-contain w-full h-44" />
        )}
        <Span fontSize="title" bold="semi-bold" className="block">
          {curData.title}
        </Span>
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

      <hr className="my-2 border-black border-dashed" />

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
        <div className="w-1/2 p-1">
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

      <hr className="my-2 border-black border-dashed" />

      <div>
        <Span fontSize="semi-title" bold="semi-bold" className="mb-4">
          기여한 부분
        </Span>

        <WIDList wid={curData.WID} />
      </div>
    </div>
  )
}

export default ProjectDetail
