import { OrbitControls, PerspectiveCamera, Trail } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { createRef, forwardRef, useRef } from "react";
import { TextureLoader } from "three";
import { useStore } from "../store";



export const SolarSistem = () => {
  const { nav } = useStore((state) => state.ui);

  //refs
  const cameraRef = useRef();
  // const sunRef = useRef()
  // const mercuryRef = useRef()
  // const venusRef = useRef()
  // const earthRef = useRef()
  // const moonRef = useRef()
  // const marsRef = useRef()
  // const jupiterRef = useRef()
  // const saturnRef = useRef()
  // const uranusRef = useRef()

  //actions
  // const focusCamera = (focusRef) => {
  //   cameraRef.current.position.z = focusRef.current.position.z + 5
  //   cameraRef.current.position.x = focusRef.current.position.x
  // }
  // const rotation = (planetRef, radius, velocity) => {
  //   planetRef.current.rotation.y += 0.01
  //   planetRef.current.position.z = Math.cos(timeCounter * velocity) * radius
  //   planetRef.current.position.x = Math.sin(timeCounter * velocity) * radius
  // }

  let timeCounter1 = 0;

  useFrame(() => {
    timeCounter1 += 0.03;
    cameraRef.current.position.z = Math.cos(timeCounter1 * 0.1) * 605;
    cameraRef.current.position.x = Math.sin(timeCounter1 * 0.1) * 605;
    // console.log(earthRef)
    //   rotation(mercuryRef, 300, 0.1)
    //   rotation(venusRef, -600, 0.03)
    //   rotation(earthRef, 900, 0.05)
    //   rotation(moonRef, 3, -0.05)
    //   rotation(marsRef, -1200, 0.09)
    //   rotation(jupiterRef, 1500, 0.1)
    //   rotation(saturnRef, -1800, 0.02)
    //   rotation(uranusRef, 2100, 0.07)
    //   switch (nav) {
    //     case 0:
    //       focusCamera(venusRef)
    //       break
    //     case 1:
    //       focusCamera(earthRef)
    //       break
    //     case 2:
    //       focusCamera(marsRef)
    //       break
    //     case 3:
    //       cameraRef.current.position.z = Math.cos(timeCounter * 0.5) * 2000
    //       break
    //       case 'explore':

    //       break
    //       case 'planets':

    //       break
    //     default:
    //       break
    //   }
  });
  const Planet = (props) => {
    const ref = useRef();
    let timeCounter2 = 0;
    useFrame(() => {
      timeCounter2 += 0.03;
      ref.current.rotation.y += 0.01;
      ref.current.position.z =
        Math.cos(timeCounter2 * props.speed) * props.distance;
      ref.current.position.x =
        Math.sin(timeCounter2 * props.speed) * props.distance;
    });
    return (
      <group>
        {/* <Trail
          width={15}
          length={7}
          attenuation={(t) => {
            return t * t;
          }}
          color={"#F8D628"}
        > */}
        <mesh ref={ref}>
          <sphereGeometry />
          <meshStandardMaterial
            map={new TextureLoader().load(
              require(`./textures/${props.name}map.jpg`)
            )}
          />
          {props.children}
        </mesh>
        {/* </Trail> */}
      </group>
    );
  };
  return (
    <group>
      {/* {nav === "explore" && <OrbitControls />} */}
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        far={12000}
        position={[0, 0, 0]}
      />

      <Planet name={"pluto"} speed={0.1} distance={1800} />
      <Planet name={"neptune"} speed={0.1} distance={-1600} />
      <Planet name={"uranus"} speed={0.1} distance={1400} />
      <Planet name={"saturn"} speed={0.1} distance={-1200} />
      <Planet name={"jupiter"} speed={0.1} distance={1000} />
      <Planet name={"mars"} speed={0.1} distance={-800} />
      <Planet name={"earth"} speed={0.1} distance={600} camera={true} />
      <Planet name={"venus"} speed={0.1} distance={-400} />
      <Planet name={"mercury"} speed={0.1} distance={300} />
      <Planet name={"sun"} speed={0.1} distance={0} />

      {/* <Trail width={15} length={100} attenuation={(t) => {return t * t}} color={'#F8D628'} >
        <mesh ref={uranusRef}>
          <Html>
            <Typography variant='caption' >Uranus</Typography>
          </Html>
          <sphereGeometry />
          <meshStandardMaterial
            map={new TextureLoader().load(require('./textures/uranusmap.jpg'))}
          />
        </mesh>
      </Trail>
      <Trail width={15} length={90} attenuation={(t) => {return t * t}} color={'#F8D628'} >
        <mesh ref={saturnRef}>
          <Html>
            <Typography variant='caption' >Saturn</Typography>
          </Html>
          <sphereGeometry />
          <meshStandardMaterial
            map={new TextureLoader().load(require('./textures/saturnmap.jpg'))}
          />
        </mesh>
      </Trail>
      <Trail width={15} length={80} attenuation={(t) => {return t * t}} color={'#F8D628'} >
        <mesh ref={jupiterRef}>
          <Html>
            <Typography variant='caption' >Jupiter</Typography>
          </Html>
          <sphereGeometry />
          <meshStandardMaterial
            map={new TextureLoader().load(require('./textures/jupitermap.jpg'))}
          />
        </mesh>
      </Trail>
      <Trail width={15} length={70} attenuation={(t) => {return t * t}}  color={'#F8D628'}>
        <mesh ref={marsRef}>
          <Html>
            <Typography variant='caption' >Mars</Typography>
          </Html>
          <sphereGeometry args={[1, 64, 32]} />
          <meshStandardMaterial
            map={new TextureLoader().load(require('./textures/marsmap.jpg'))}
          />
        </mesh>
      </Trail>
      <Trail width={15} length={60} attenuation={(t) => {return t * t}} color={'#F8D628'} >
        <mesh ref={earthRef}>
          <Html>
            <Typography variant='caption' >Earth</Typography>
          </Html>
          <sphereGeometry args={[1, 64, 32]} />
          <meshStandardMaterial
            map={new TextureLoader().load(require('./textures/earthmap1k.jpg'))}
          />
          <mesh ref={moonRef} scale={0.1}  >
            <sphereGeometry />
            <meshStandardMaterial
              map={new TextureLoader().load(require('./textures/moonmap.jpg'))}
            />
          </mesh>
        </mesh>
      </Trail>
      <Trail width={15} length={50} attenuation={(t) => {return t * t}} color={'#F8D628'} >
        <mesh ref={venusRef}>
          <Html>
            <Typography variant='caption' >Venus</Typography>
          </Html>
          <sphereGeometry />
          <meshStandardMaterial
            map={new TextureLoader().load(require('./textures/venusmap.jpg'))}
          />
        </mesh>
      </Trail>
      <Trail width={15} length={40} attenuation={(t) => {return t * t}} color={'#F8D628'} >
        <mesh ref={mercuryRef}>
          <Html>
            <Typography variant='caption' >Mercury</Typography>
          </Html>
          <sphereGeometry args={[1, 64, 32]} />
          <meshStandardMaterial
            map={new TextureLoader().load(require('./textures/mercurymap.jpg'))}
          />
        </mesh>
      </Trail>
      <mesh scale={5} ref={sunRef}>
        <sphereGeometry />
        <meshStandardMaterial
          map={new TextureLoader().load(require('./textures/sunmap.jpg'))}
          emissive={0xfee14d}
        />
      </mesh> */}
    </group>
  );
};
