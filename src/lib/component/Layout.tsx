import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="absolute top-0 right-0 w-1/2 h-screen p-8 bg-white bg-opacity-70">
      <Outlet />
    </div>
  )
}

export default Layout
