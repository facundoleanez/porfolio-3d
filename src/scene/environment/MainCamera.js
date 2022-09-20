import { OrbitControls, PerspectiveCamera, Sparkles } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useContext, useRef } from 'react'

export const MainCamera = ({ nav }) => {
  const ref = useRef()
  const position = [3, 0, 30]
  useFrame(() => {
    switch (nav) {
      case 0:
        ref.current.rotation.y += 0.004
        if (ref.current.position.z > 30) {
          ref.current.position.z -= 0.2
        }
        break
      case 1:
        ref.current.rotation.y += 0.004
        if (ref.current.position.z < 60) {
          ref.current.position.z += 0.2
        }
        break
      default:
        break
    }
  })
  return (
    <group ref={ref}>
      <group position={-position}></group>
      <PerspectiveCamera
        makeDefault
        position={position}
        // rotation={[0, 1.7, 0]}
      />

      <OrbitControls />
    </group>
  )
}
