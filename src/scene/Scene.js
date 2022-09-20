import React, { useContext } from 'react'
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { SolarSistem } from './SolarSistem'
import { MainCamera } from './environment/MainCamera'

export const Scene = () => {
  return (
    <Canvas>
      <color attach='background' args={['#191920']} />
      <ambientLight intensity={0.02} />
      <SolarSistem />
      <pointLight />
    </Canvas>
  )
}
