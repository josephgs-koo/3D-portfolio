import { Billboard, Line, Line2Props, RoundedBox, Sphere } from '@react-three/drei'
import { ThreeEvent, Vector3, useFrame } from '@react-three/fiber'
import { ForwardedRef, ReactNode, forwardRef, useEffect, useRef } from 'react'
import { AxesHelper, BufferGeometry, Group, Mesh, NormalBufferAttributes } from 'three'

interface ItemProps {
  position?: Vector3
  children: React.ReactNode
}

const BGroup = forwardRef(({ position, children }: ItemProps, ref: ForwardedRef<Group>) => {
  return (
    <group position={position} ref={ref}>
      <Billboard follow lockX={false} lockY={false} lockZ={false}>
        {children}
      </Billboard>
    </group>
  )
})

const Ball = () => {
  const sphereRef = useRef<Mesh>(null)
  const lineRef = useRef(null)

  return (
    <group>
      <Sphere args={[0.5, 16, 16]} ref={sphereRef} position={[2, 0, 0]}>
        <meshPhongMaterial color={'#e8e8e8'} />
      </Sphere>
    </group>
  )
}

interface SquareProps {
  children?: ReactNode
  position?: Vector3
  onClick?: (e: ThreeEvent<MouseEvent>) => void
  onPointerMissed?: () => void
}

const Square = forwardRef((props: SquareProps, ref: ForwardedRef<Mesh>) => {
  return (
    <RoundedBox
      {...props}
      ref={ref}
      position={props.position}
      args={[2, 2, 0.2]}
      radius={0.1}
      smoothness={4}
      bevelSegments={4}
      creaseAngle={0.4}
    >
      <meshPhongMaterial color={'#e8e8e8'} />
      {/* <axesHelper scale={10} /> */}
    </RoundedBox>
  )
})

const BillboardGroup = Object.assign(BGroup, { Ball, Square })

export default BillboardGroup
