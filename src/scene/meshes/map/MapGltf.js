import { useGLTF } from '@react-three/drei'
import React from 'react'
const map = require('../../models/map.glb')
export const MapGltf = () => {
  const mapa = useGLTF(map)
  //   mapa.materials[''].roughness = 0
  //   console.log()
  return (
    <group>
      {/* <mesh
        geometry={mapa.nodes.Cube.geometry}
        material={<meshStandardMaterial roughness={0} metalness={1} />}
      />
       */}
      <primitive object={mapa.scene} />
    </group>
  )
}
