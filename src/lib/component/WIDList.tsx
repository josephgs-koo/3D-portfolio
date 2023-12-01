import Span from './ui/Items'
import List from './ui/List'

type TWid = { title: string; detail?: string[] }[]

interface IWIDListProps {
  wid: TWid
}

const WIDList = ({ wid }: IWIDListProps) => {
  return (
    <List className="flex flex-col gap-4 p-4 list-disc list-inside">
      {wid.map((x) => (
        <List.Li key={x.title}>
          <Span fontSize="basic" bold="semi-bold">
            {x.title}
          </Span>
          {x.detail && (
            <List className="pl-8">
              {x.detail.map((ele) => (
                <List.Li key={ele}>
                  <Span fontSize="basic">{'- ' + ele}</Span>
                </List.Li>
              ))}
            </List>
          )}
        </List.Li>
      ))}
    </List>
  )
}

export default WIDList
