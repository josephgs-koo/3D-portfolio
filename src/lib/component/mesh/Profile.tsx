import { ForwardedRef, forwardRef } from 'react'
import { Mesh } from 'three'
import { Dodecahedron, MeshDistortMaterial, Sphere, Wireframe } from '@react-three/drei'

interface IProfileProps {
  position: [number, number, number]
}

const Profile = forwardRef(({ position }: IProfileProps, ref: ForwardedRef<Mesh>) => {
  return (
    <group>
      <Sphere ref={ref} args={[1, 32, 32]} position={position}>
        <MeshDistortMaterial speed={1} distort={0.7} color="black" metalness={0.5} roughness={0.3} />
      </Sphere>
      <Dodecahedron args={[1.7, 1]}>
        <meshPhongMaterial color="#292525" shininess={1} transparent />
        <Wireframe fillMix={1} thickness={0.07} fillOpacity={0} stroke="black" backfaceStroke="black" />
      </Dodecahedron>
    </group>
  )
})

export default Profile
