import ModalContextProvider from './lib/utils/ModalContext'
import { Canvas } from '@react-three/fiber'
import { Float, Html, Hud, OrbitControls } from '@react-three/drei'
import data from './lib/data/data.json'
import { Group, Mesh } from 'three'
import { useEffect, useRef } from 'react'

import BillboardGroup from './lib/component/mesh/Item'
import Ray from './lib/component/Rays'
import Profile from './lib/component/mesh/Profile'

function App() {
  const squareRef = useRef<Mesh>(null)
  const someRef = useRef<Mesh>(null)

  useEffect(() => {}, [])

  return (
    <ModalContextProvider>
      <div className="relative w-screen h-[100dvh]">
        <Canvas camera={{ position: [0, 0, 10] }}>
          <color attach={'background'} args={['#dfdfdf']} />
          <axesHelper scale={30} />
          <ambientLight intensity={0.5} />
          <spotLight
            intensity={1}
            angle={0.2}
            penumbra={1}
            position={[30, 30, 30]}
            castShadow
            shadow-mapSize={[512, 512]}
          />
          <directionalLight position={[3, 3, 3]} intensity={3} />

          <Float speed={4} rotationIntensity={1} floatIntensity={2}>
            <Profile position={[0, 0, 0]} ref={squareRef} />
          </Float>

          {Object.keys(data).map((x) => {
            return (
              <Ray target={squareRef}>
                <Ray.RayDetail title={x}></Ray.RayDetail>
              </Ray>
            )
          })}

          <OrbitControls />

          <Hud>
            <Html>
              <div className="h-screen w- bg-neutral-300 bg-opacity-70"></div>
            </Html>
          </Hud>
        </Canvas>
        {/* <Modal /> */}
      </div>
    </ModalContextProvider>
  )
}

export default App
