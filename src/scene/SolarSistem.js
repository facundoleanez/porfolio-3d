import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import { TextureLoader } from 'three'
import { useStore } from '../store'
export const SolarSistem = () => {
  const { nav } = useStore((state) => state.ui)

  //refs
  const cameraRef = useRef()
  const sunRef = useRef()
  const mercuryRef = useRef()
  const venusRef = useRef()
  const earthRef = useRef()
  const moonRef = useRef()
  const marsRef = useRef()
  const jupiterRef = useRef()
  const saturnRef = useRef()
  const uranusRef = useRef()

  //actions
  const focusCamera = (focusRef, distance) => {
    cameraRef.current.position.z = focusRef.current.position.z + 4
    cameraRef.current.position.x = focusRef.current.position.x
  }
  const rotation = (planetRef, radius, velocity) => {
    planetRef.current.rotation.y += 0.02
    planetRef.current.position.z = Math.cos(timeCounter + velocity) * radius
    planetRef.current.position.x = Math.sin(timeCounter + velocity) * radius
  }

  let timeCounter = 0

  useFrame(() => {
    timeCounter += 0.01

    rotation(mercuryRef, 300, 0)
    rotation(venusRef, -600, 0.03)
    rotation(earthRef, 900, 0.05)
    rotation(moonRef, 3, -0.05)
    rotation(marsRef, -1200, 0.09)
    rotation(jupiterRef, 1500, 0.1)
    rotation(saturnRef, -1800, 0.02)
    rotation(uranusRef, 2100, 0.07)
    switch (nav) {
      case 0:
        focusCamera(venusRef)
        break
      case 1:
        focusCamera(earthRef)
        break
      case 2:
        focusCamera(marsRef)
        break
      default:
        break
    }
  })
  return (
    <group>
      <PerspectiveCamera name='caca' ref={cameraRef} makeDefault />
      {/* <OrbitControls /> */}
      <mesh ref={uranusRef}>
        <sphereGeometry />
        <meshStandardMaterial
          map={new TextureLoader().load(require('./textures/uranusmap.jpg'))}
        />
      </mesh>
      <mesh ref={saturnRef}>
        <sphereGeometry />
        <meshStandardMaterial
          map={new TextureLoader().load(require('./textures/saturnmap.jpg'))}
        />
      </mesh>
      <mesh ref={jupiterRef}>
        <sphereGeometry />
        <meshStandardMaterial
          map={new TextureLoader().load(require('./textures/jupitermap.jpg'))}
        />
      </mesh>
      <mesh ref={marsRef}>
        <sphereGeometry args={[1, 64, 32]} />
        <meshStandardMaterial
          map={new TextureLoader().load(require('./textures/marsmap.jpg'))}
        />
        <Stars />
      </mesh>
      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 64, 32]} />
        <meshStandardMaterial
          map={new TextureLoader().load(require('./textures/earthmap1k.jpg'))}
        />
        <Stars />
        <mesh ref={moonRef} scale={0.1}>
          <sphereGeometry />
          <meshStandardMaterial
            map={new TextureLoader().load(require('./textures/moonmap.jpg'))}
          />
        </mesh>
      </mesh>
      <mesh ref={venusRef}>
        <sphereGeometry />
        <meshStandardMaterial
          map={new TextureLoader().load(require('./textures/venusmap.jpg'))}
        />
        <Stars />
      </mesh>
      <mesh ref={mercuryRef}>
        <sphereGeometry args={[1, 64, 32]} />
        <meshStandardMaterial
          map={new TextureLoader().load(require('./textures/mercurymap.jpg'))}
        />
      </mesh>
      <mesh scale={4} ref={sunRef}>
        <sphereGeometry />
        <meshStandardMaterial
          map={new TextureLoader().load(require('./textures/sunmap.jpg'))}
          emissive={0xfee14d}
        />
      </mesh>
    </group>
  )
}
