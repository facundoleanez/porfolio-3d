import React, { useState } from 'react'
import { useSphere } from '@react-three/cannon'
import { TransformControls } from '@react-three/drei'

export const CharacterBall = (props) => {
  const [forward, setForward] = useState(0)
  const [ref] = useSphere(() => ({ mass: 100, position: [0, 10, 0], ...props }))
  // const mesh = useRef()
  return (
    <>
      {/* <TransformControls mode='translate' object={mesh} /> */}
      <mesh ref={ref} position={[0, 0, 0]}>
        <sphereGeometry />
        <meshStandardMaterial
          color={props.color}
          metalness={1}
          roughness={0.25}
        />
      </mesh>
    </>
  )
}
