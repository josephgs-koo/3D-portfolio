import { useContext } from 'react'
import { ModalContext } from '../utils/ModalContext'
import Btn from './Btn'

const Modal = () => {
  const modal = useContext(ModalContext)

  return (
    <div
      className={`fixed top-0 bottom-0 ${
        modal?.state.visible ? 'left-0' : 'left-full'
      } right-0 bg-black bg-opacity-50 w-screen flex justify-end z-20 transition-all duration-500`}
    >
      <div
        className={`relative w-3/5 h-[100dvh] bg-white border-neutral-600 border-l-2 rounded-[5dvh_0_0_5dvh/50dvh_0_0_50dvh] p-[5dvh] z-30`}
      >
        Modalffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        <Btn
          className="absolute top-4 right-4"
          onClick={(e) => {
            modal?.setState({ visible: false })
          }}
        >
          x
        </Btn>
      </div>
    </div>
  )
}

export default Modal
