import { Fragment } from 'react'
import List from '../component/ui/List'
import StudyDetail from '../component/StudyDetail'
import TitleLayout from '../component/ui/TitleLayout'
import data from '../data/data'

const Study = () => {
  return (
    <>
      <TitleLayout title="Educations">
        <List className="flex flex-col gap-4">
          {data.Education.map((x, idx) => (
            <Fragment key={x.from}>
              <StudyDetail data={x} />
              {idx !== data.Education.length - 1 && <hr className="border-dashed border-neutral-800" />}
            </Fragment>
          ))}
        </List>
      </TitleLayout>
    </>
  )
}

export default Study
