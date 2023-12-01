import TitleLayout from '../component/ui/TitleLayout'
import data from '../data/data'
import profileImg from '../assets/profile.png'
import List from '../component/ui/List'
import Span from '../component/ui/Items'
import ContectList from '../component/ContectList'
import Space from '../component/ui/Spacing'
import { Fragment } from 'react'

const Profile = () => {
  return (
    <>
      <TitleLayout title={data.Profile.name} sub={data.Profile.sentence} padding={false}>
        <div className="flex flex-row items-center w-full gap-4 border-b">
          <div className="w-1/2 min-w-[200px]">
            <img src={profileImg} alt="profileImg" className="w-full aspect-square" />
          </div>
          <div className="flex-1">
            <List className="flex flex-col gap-2">
              <List.Li>
                <ContectList data={data.Profile.contact} title="Contacts" />
              </List.Li>
              <List.Li>
                <ContectList data={data.Profile.more} title="Channels" />
              </List.Li>
            </List>
          </div>
        </div>
        <Space direction="vertical" space={10} />

        <div className="p-2">
          {data.Profile.introduce.split('\n').map((x, idx) => {
            if (idx % 2 === 0)
              return (
                <Span fontSize="strong" bold="semi-bold" key={x + idx}>
                  {x}
                </Span>
              )
            return (
              <Fragment key={idx}>
                <p className="break-words whitespace-pre-wrap">{' ' + x}</p>
                <br />
              </Fragment>
            )
          })}
        </div>
      </TitleLayout>
    </>
  )
}

export default Profile
