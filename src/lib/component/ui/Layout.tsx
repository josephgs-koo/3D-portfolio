import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="absolute top-0 right-0 w-1/2 h-[100dvh] bg-white/25 backdrop-blur-[2px] overflow-y-auto">
      <Outlet />
    </div>
  )
}

export default Layout
