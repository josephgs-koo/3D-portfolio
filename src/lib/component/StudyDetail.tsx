import Span from './ui/Items'
import List from './ui/List'
import Space from './ui/Spacing'

type dataType = {
  from: string
  detail: string
  period: string[]
  WIL: string[]
}

const StudyDetail = ({ data }: { data: dataType }) => {
  return (
    <div className="flex flex-row">
      <div className="w-1/5">
        <Span fontSize="basic">{data.period[0] + ' - ' + data.period[1]}</Span>
      </div>
      <Space direction="horizontal" space={4} />
      <div className="flex-1">
        <Span fontSize="semi-title" bold="semi-bold">
          {data.from}
        </Span>
        <br />
        <Span fontSize="basic">{data.detail}</Span>
        <hr className="border-black" />
        <List className="p-4 list-disc">
          {data.WIL.map((x) => (
            <List.Li key={x}>
              <Span fontSize="basic">{x}</Span>
            </List.Li>
          ))}
        </List>
      </div>
    </div>
  )
}

export default StudyDetail
