import ModalContextProvider from './lib/utils/ModalContext'
import { Canvas } from '@react-three/fiber'
import Scene from './lib/component/Scene'
import { Vector3 } from 'three'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './lib/component/Layout'
import Profile from './lib/pages/Profile'
import Skills from './lib/pages/Skills'
import Projects from './lib/pages/Projects'
import Study from './lib/pages/Study'

const look = new Vector3(0, 0, 0)

function App() {
  return (
    <ModalContextProvider>
      <BrowserRouter>
        <div className="relative w-2/3 h-[100dvh]">
          <Canvas camera={{ position: [0, 0, 10], lookAt: () => look }}>
            <Scene />
          </Canvas>
          {/* <Modal /> */}
        </div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Profile />} />
            <Route path="Skills" element={<Skills />} />
            <Route path="Projects" element={<Projects />} />
            <Route path="Study" element={<Study />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ModalContextProvider>
  )
}

export default App
