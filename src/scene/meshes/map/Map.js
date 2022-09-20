import { useLoader } from '@react-three/fiber'
import React, { useRef } from 'react'
import { MeshStandardMaterial } from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
const map = require('../../models/map.fbx')

export const Map = () => {
  const fbx = useLoader(FBXLoader, map)
  const ok = useRef()
  return (
    <group>
      <primitive object={fbx} scale={0.005} ref={ok} />
    </group>
  )
}
