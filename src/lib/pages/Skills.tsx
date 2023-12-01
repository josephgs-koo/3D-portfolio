import TitleLayout from '../component/ui/TitleLayout'
import Span from '../component/ui/Items'
import List from '../component/ui/List'
import data from '../data/data'

const Skills = () => {
  return (
    <TitleLayout title="Skills">
      <List className="flex flex-col gap-2">
        {data.Skills.map((x, idx) => (
          <List.Li key={x.category + 'idx'} className="text-xl font-semibold">
            {x.category}
            <div className="flex flex-wrap gap-2 p-4">
              {x.detail.map((x) => (
                <Span fontSize="basic" styletype="item" key={x}>
                  {x}
                </Span>
              ))}
            </div>
          </List.Li>
        ))}
      </List>
    </TitleLayout>
  )
}

export default Skills
