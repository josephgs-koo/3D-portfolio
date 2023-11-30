import { ForwardedRef, forwardRef, useContext, useRef } from 'react'
import { ModalContext } from '../../utils/ModalContext'
import { ThreeEvent, useFrame } from '@react-three/fiber'
import { Group, Mesh } from 'three'
import { Billboard, Dodecahedron, Icosahedron, MeshDistortMaterial, Sphere, Wireframe } from '@react-three/drei'

interface IProfileProps {
  position: [number, number, number]
}

const Profile = forwardRef(({ position }: IProfileProps, ref: ForwardedRef<Mesh>) => {
  const modal = useContext(ModalContext)

  const onMeshClicked = (e: ThreeEvent<MouseEvent>) => modal?.setState({ visible: true })

  useFrame((state, delta) => {})

  return (
    // <mesh ref={ref} position={position}>
    //   <sphereGeometry args={[1, 32, 32]} />
    //   <MeshDistortMaterial color={'#9d6363'} speed={3} />
    // </mesh>
    <group>
      <Sphere ref={ref} args={[1, 32, 32]} onClick={onMeshClicked} position={position}>
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
