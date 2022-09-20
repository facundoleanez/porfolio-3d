import React from 'react'
import { usePlane } from '@react-three/cannon'

export const PlaneColider = (props) => {
  const [ref] = usePlane(() => ({
    mass: 0,
    position: [0, 0, 0],
    rotation: [-Math.PI / 2, 0, 0],
    ...props,
  }))

  return (
    <mesh
      ref={ref}
      rotation={[-Math.PI / 2, 0, 0]}
      //   position={[0, 1, 0]}
    >
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial
      //  roughness={0} metalness={1}
      />
    </mesh>
  )
}
