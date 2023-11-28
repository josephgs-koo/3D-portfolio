import { useRef, useEffect, RefObject, ReactNode } from 'react'
import { useFrame } from '@react-three/fiber'
import { CylinderGeometry, Group, Mesh, MeshBasicMaterial, Raycaster, Vector3 } from 'three'
import { RenderTexture, Sphere, Text } from '@react-three/drei'

const pointDist = 5
const raycaster = new Raycaster()
const origVec = new Vector3()
const dirVec = new Vector3()

const cyl = new CylinderGeometry(0.01, 0.01)
const tra = new MeshBasicMaterial({ color: '#000000', transparent: true, opacity: 0.5 })

interface IRayProps {
  target: RefObject<Mesh>
  children: ReactNode
}

const Ray = ({ target, children }: IRayProps) => {
  const objRef = useRef<Group>(null)
  const origRef = useRef<Group>(null)
  const cylinderMesh = useRef<Mesh>(null)

  useEffect(() => {
    if (origRef.current && objRef.current) {
      objRef.current.rotation.y = Math.random() * 10
    }
  }, [])

  const xDir = Math.random() - 0.25
  const yDir = Math.random() - 0.25

  useFrame((state, delta) => {
    if (origRef.current && objRef.current && cylinderMesh.current && target.current) {
      const obj = objRef.current
      const orig = origRef.current

      obj.rotation.x += xDir * delta
      obj.rotation.z += yDir * delta

      orig.lookAt(state.camera.position)

      orig.updateMatrixWorld()
      origVec.setFromMatrixPosition(orig.matrixWorld)
      dirVec.copy(origVec).multiplyScalar(-1).normalize()
      raycaster.set(origVec, dirVec)
      raycaster.firstHitOnly = true
      const res = raycaster.intersectObject(target.current, true)
      const length = res.length ? res[0].distance : pointDist
      cylinderMesh.current.position.set(pointDist - length / 2, 0, 0)
      cylinderMesh.current.scale.set(1, length, 1)
      cylinderMesh.current.rotation.z = Math.PI / 2
    }
  })

  return (
    <group ref={objRef} position={[0, 0, 0]}>
      {/* <axesHelper scale={10} /> */}

      <group ref={origRef} position={[pointDist, 0, 0]}>
        {children}
      </group>

      <mesh ref={cylinderMesh} geometry={cyl} material={tra} />
    </group>
  )
}

interface IRayDetailProps {
  children?: ReactNode
  title: string
}
const RayDetail = ({ title, children }: IRayDetailProps) => {
  return (
    <>
      <Text color={'#2d2a2a'} fontSize={0.7}>
        {title}
      </Text>
      {children && <group position={[0, -1, 0]}>{children}</group>}
    </>
  )
}

const RayGroup = Object.assign(Ray, { RayDetail })

export default RayGroup
