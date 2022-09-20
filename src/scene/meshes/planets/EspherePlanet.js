import { useFrame } from '@react-three/fiber'
import React from 'react'
import { useRef } from 'react'
import { TextureLoader } from 'three'
import { useStore } from '../../../store'

export const EspherePlanet = (props) => {
  const setEarth = useStore((state) => state.setEarth)
  const earth = new TextureLoader().load(
    require('../../textures/earthmap1k.jpg')
  )
  const jupiter = new TextureLoader().load(
    require('../../textures/jupitermap.jpg')
  )
  const mars = new TextureLoader().load(require('../../textures/marsmap.jpg'))
  const mercury = new TextureLoader().load(
    require('../../textures/mercurymap.jpg')
  )
  const moon = new TextureLoader().load(require('../../textures/moonmap.jpg'))
  const neptune = new TextureLoader().load(
    require('../../textures/neptunemap.jpg')
  )
  const pluto = new TextureLoader().load(require('../../textures/plutomap.jpg'))
  const saturn = new TextureLoader().load(
    require('../../textures/saturnmap.jpg')
  )
  const sun = new TextureLoader().load(require('../../textures/sunmap.jpg'))
  const uranus = new TextureLoader().load(
    require('../../textures/uranusmap.jpg')
  )
  const venus = new TextureLoader().load(require('../../textures/venusmap.jpg'))

  const planet = useRef()
  const group = useRef()

  useFrame(() => {
    planet.current.rotation.y += props.rotationSpeed
    group.current.rotation.y += props.traslationSpeed
  })
  const handleClick = () => {
    if (props.planet === 'earth') {
      const pX = planet.current.position.x
      const rX = planet.current.rotation.x
      setEarth(pX, rX)
    }
  }

  const plantetPicker = () => {
    switch (props.planet) {
      case 'earth':
        return earth
      case 'jupiter':
        return jupiter
      case 'mars':
        return mars
      case 'mercury':
        return mercury
      case 'moon':
        return moon
      case 'neptune':
        return neptune
      case 'pluto':
        return pluto
      case 'saturn':
        return saturn
      case 'sun':
        return sun
      case 'uranus':
        return uranus
      case 'venus':
        return venus
      default:
        break
    }
  }
  return (
    <group ref={group} onClick={handleClick}>
      <mesh {...props} ref={planet}>
        <sphereGeometry />
        <meshStandardMaterial map={plantetPicker()} />
        {props.children}
      </mesh>
      <group position={-props.position}></group>
    </group>
  )
}
