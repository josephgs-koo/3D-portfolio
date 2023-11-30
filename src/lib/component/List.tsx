import { HTMLAttributes } from 'react'

interface IUlProps extends HTMLAttributes<HTMLUListElement> {}

const Ul = (props: IUlProps) => {
  return <ul {...props}>{props.children}</ul>
}

interface ILiProps extends HTMLAttributes<HTMLLIElement> {}

const Li = (props: ILiProps) => {
  return <li {...props}>{props.children}</li>
}

const List = Object.assign(Ul, { Li: Li })

export default List
