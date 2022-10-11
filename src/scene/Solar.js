import React, { useRef } from "react";
import { OrbitControls, PerspectiveCamera, Trail } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useStore } from "../store";

const Planet = (props) => {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });
  return (
    <group>
      <mesh ref={ref} {...props}>
        <sphereGeometry />
        <meshStandardMaterial
          map={new TextureLoader().load(
            require(`./textures/${props.name}map.jpg`)
          )}
        />
      </mesh>
    </group>
  );
};

export const Solar = () => {
  const { nav } = useStore((state) => state.ui);
  const setPositionCamera = (distance, zPosition) => {
    if (zPosition > distance) {
      cameraRef.current.position.z -= 0.3;
    } else if (zPosition < distance - 1) {
      cameraRef.current.position.z += 0.1;
    }
  };
  const cameraRef = useRef();
  useFrame(() => {
    const zPosition = cameraRef.current.position.z;
    switch (nav) {
      case 0:
        setPositionCamera(5, zPosition);
        break;
      case 1:
        setPositionCamera(15, zPosition);
        break;
      case 2:
        setPositionCamera(25, zPosition);
        break;
      case 3:
        setPositionCamera(35, zPosition);
        break;
      case 4:
        setPositionCamera(45, zPosition);
        break;
      case 5:
        setPositionCamera(55, zPosition);
        break;
      case 6:
        setPositionCamera(65, zPosition);
        break;
      case 7:
        setPositionCamera(75, zPosition);
        break;
      case 8:
        setPositionCamera(85, zPosition);
        break;
      case 9:
        setPositionCamera(95, zPosition);
        break;
      default:
        break;
    }
  });
  return (
    <group>
      {/* {nav === "explore" && <OrbitControls />} */}
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 5]} />
      <Planet name={"pluto"} position={[0, 0, 90]} />
      <Planet name={"neptune"} position={[0, 0, 80]} />
      <Planet name={"uranus"} position={[0, 0, 70]} />
      <Planet name={"saturn"} position={[0, 0, 60]} />
      <Planet name={"jupiter"} position={[0, 0, 50]} />
      <Planet name={"mars"} position={[0, 0, 40]} />
      <Planet name={"earth"} position={[0, 0, 30]} />
      <Planet name={"venus"} position={[0, 0, 20]} />
      <Planet name={"mercury"} position={[0, 0, 10]} />
      <Planet name={"sun"} position={[0, 0, 0]} />
    </group>
  );
};
