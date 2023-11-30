import List from '../component/List'
import StudyDetail from '../component/StudyDetail'
import TitleLayout from '../component/TitleLayout'
import data from '../data/data'

const Study = () => {
  return (
    <>
      <TitleLayout title="Study">
        <List className="flex flex-col gap-4">
          {data.Study.map((x, idx) => (
            <>
              <StudyDetail data={x} key={x.from} />
              {idx !== data.Study.length - 1 && <hr className="border-dashed border-neutral-800" />}
            </>
          ))}
        </List>
      </TitleLayout>
    </>
  )
}

export default Study
