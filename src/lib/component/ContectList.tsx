import Span from './ui/Items'
import List from './ui/List'

type dataType = {
  type: string
  content: string
}

const ContectList = ({ data, title }: { data: dataType[]; title: string }) => {
  return (
    <>
      <Span fontSize="semi-title" bold="semi-bold">
        Contact
      </Span>
      <List className="flex flex-col gap-2 pl-4">
        {data.map((x) => (
          <List.Li key={x.type} className="whitespace-break-spaces line-clamp-1">
            <Span fontSize="basic" bold="semi-bold">
              {x.type + ' : '}
            </Span>
            <Span fontSize="basic">
              {x.content.match(/(http(s)?:\/\/)/gi) ? (
                <a href={x.content}>{x.content.replace(/(http(s)?:\/\/)/gi, '')}</a>
              ) : (
                x.content
              )}
            </Span>
          </List.Li>
        ))}
      </List>
    </>
  )
}

export default ContectList
