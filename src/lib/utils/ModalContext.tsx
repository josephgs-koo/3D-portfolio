import { ReactNode, SetStateAction, createContext, useMemo, useState } from 'react'

type IModalState = {
  visible: boolean
}

export type IModalContext = {
  state: IModalState
  setState: React.Dispatch<SetStateAction<IModalState>>
}

export const ModalContext = createContext<IModalContext | null>(null)

interface IModalContextProviderProps {
  children: ReactNode
}

const ModalContextProvider = ({ children }: IModalContextProviderProps) => {
  const [state, setState] = useState<IModalState>({ visible: false })

  const value = useMemo(() => ({ state, setState }), [state, setState])

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}

export default ModalContextProvider
