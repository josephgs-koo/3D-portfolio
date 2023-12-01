import ModalContextProvider from './lib/utils/ModalContext'
import { Canvas } from '@react-three/fiber'
import Scene from './lib/component/Scene'
import { Vector3 } from 'three'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './lib/component/ui/Layout'
import Profile from './lib/pages/Profile'
import Skills from './lib/pages/Skills'
import Projects from './lib/pages/Projects'
import Study from './lib/pages/Study'
import data from './lib/data/data'
import ProjectDetail from './lib/pages/ProjectDetail'

const look = new Vector3(0, 0, 0)

function App() {
  return (
    <BrowserRouter>
      <div className="relative max-w-7xl mx-auto w-full h-[100dvh]">
        <div className="w-2/3 h-full">
          <Canvas camera={{ position: [0, -1, 10], lookAt: () => look }}>
            <Scene />
          </Canvas>
          {/* <Modal /> */}
        </div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Profile />} />
            <Route path="Skills" element={<Skills />} />
            <Route path="Projects" element={<Projects />} />
            {data.Projects.map((x) => (
              <Route
                key={x.projectName}
                path={`Projects/${x.projectName}`}
                element={<ProjectDetail project={x.projectName} key={x.projectName} />}
              />
            ))}
            <Route path="Education" element={<Study />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
