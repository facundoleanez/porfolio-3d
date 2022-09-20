import React from 'react'
import { Environment } from '@react-three/drei'
const px = require('../textures/cave.jpg')

export const EnvironmentSpace = () => {
  // const presets = Object.keys(presetsObj)
  return (
    <Environment
      background={true}
      files={
        // px, nx, py, ny, pz, nz
        px
      }
    />
  )
}
