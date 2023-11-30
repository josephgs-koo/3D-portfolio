import { useRef, useEffect, RefObject, ReactNode, useState } from 'react'
import { ThreeEvent, useFrame } from '@react-three/fiber'
import { CylinderGeometry, Group, Mesh, MeshBasicMaterial, Raycaster, Vector3 } from 'three'
import { Bounds, Float, RenderTexture, Sphere, Text, useBounds, useCamera } from '@react-three/drei'
import BillboardGroup from './mesh/Item'
import { useNavigate } from 'react-router-dom'

const pointDist = 3
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

      const tar = new Vector3()
      const origPosition = orig.getWorldPosition(tar)
      orig.lookAt(new Vector3(origPosition.x, origPosition.y, origPosition.z + 1))

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
  const [hover, setHover] = useState(false)
  const router = useNavigate()

  return (
    <>
      <Text
        color={hover ? '#4d4747' : '#2d2a2a'}
        fontSize={0.5}
        anchorX="left"
        onClick={() => router(`/${title !== 'Profile' ? title : ''}`)}
        onPointerOver={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
      >
        {children}
      </Text>
    </>
  )
}

const RayGroup = Object.assign(Ray, { RayDetail })

export default RayGroup
