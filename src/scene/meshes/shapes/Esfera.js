import React, { useRef } from 'react'

export const Esfera = (props) => {
  // const ball = useRef()
  // console.log(ball)
  return (
    <mesh
      {...props}
      //  ref={ball}
    >
      <sphereGeometry />
      <meshStandardMaterial
        color={props.color}
        metalness={1}
        roughness={0.25}
        emissive={props.emissive}
      />
    </mesh>
  )
}
