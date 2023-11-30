import { Bvh, ContactShadows, Float } from '@react-three/drei'
import Profile from './mesh/Profile'
import RayGroup from './Rays'
import { useRef } from 'react'
import { Mesh } from 'three'
import data from '../data/data'

const Scene = () => {
  const mainRef = useRef<Mesh>(null)

  return (
    <>
      <ambientLight intensity={1.5} />
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
        <Profile position={[0, 0, 0]} ref={mainRef} />
      </Float>

      <Bvh>
        {Object.keys(data).map((x) => {
          return (
            <RayGroup target={mainRef} key={x}>
              <RayGroup.RayDetail title={x} key={x + 'detail'}>
                {x}
              </RayGroup.RayDetail>
            </RayGroup>
          )
        })}
      </Bvh>

      <ContactShadows
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, -4, 0]}
        opacity={0.8}
        scale={30}
        blur={2.5}
        far={5}
        resolution={256}
        color="#000000"
      />
    </>
  )
}

export default Scene
