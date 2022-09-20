import { Typography } from '@mui/material'
import { Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { createRef, useRef } from 'react'
import { useStore } from '../../../store'
import { EspherePlanet } from './EspherePlanet'

export const SolarSistem = () => {
  const earthState = useStore((state) => state.earth)
  const ui = useStore((state) => state.ui)
  return (
    <group>
      <EspherePlanet
        position={[0, 0, 90]}
        planet='pluto'
        rotationSpeed={0.01}
        traslationSpeed={0.011}
      />
      <EspherePlanet
        scale={2}
        position={[0, 0, 80]}
        planet='neptuno'
        rotationSpeed={0.01}
        traslationSpeed={0.008}
      />
      <EspherePlanet
        scale={2}
        position={[0, 0, 70]}
        planet='uranus'
        rotationSpeed={0.01}
        traslationSpeed={0.007}
      />
      <EspherePlanet
        scale={4}
        position={[0, 0, 60]}
        planet='saturn'
        rotationSpeed={0.01}
        traslationSpeed={0.006}
      />
      <EspherePlanet
        scale={5}
        position={[0, 0, 50]}
        planet='jupiter'
        rotationSpeed={0.01}
        traslationSpeed={0.009}
      />
      <EspherePlanet
        scale={0.9}
        position={[0, 0, 40]}
        planet='mars'
        rotationSpeed={0.01}
        traslationSpeed={0.003}
      />
      <EspherePlanet
        position={[0, 0, 30]}
        planet='earth'
        rotationSpeed={0.01}
        traslationSpeed={0.004}
      >
        <Html>
          <Typography>{ui.nav}</Typography>
        </Html>
        <EspherePlanet
          scale={0.2}
          position={[3.5, 0, 0]}
          planet='moon'
          rotationSpeed={0.01}
          traslationSpeed={0.05}
        />
      </EspherePlanet>
      <EspherePlanet
        scale={0.8}
        position={[0, 0, 20]}
        planet='venus'
        rotationSpeed={0.01}
        traslationSpeed={0.002}
      />
      <EspherePlanet
        scale={0.6}
        position={[0, 0, 10]}
        planet='mercury'
        rotationSpeed={0.01}
        traslationSpeed={0.002}
      />
      <EspherePlanet
        scale={3}
        position={[0, 0, 0]}
        planet='sun'
        rotationSpeed={0}
        traslationSpeed={0}
        emissive={0x555555}
      />
    </group>
  )
}
