import React, { useRef } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
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
        <sphereGeometry args={[1, 50, 30]} />
        <meshStandardMaterial
          emissive={props.emissive}
          ambientLight={props.ambientLight}
          map={new TextureLoader().load(
            require(`./textures/${props.name}map.jpg`)
          )}
        />
        {props.children}
      </mesh>
    </group>
  );
};

export const Solar = () => {
  const { planet } = useStore((state) => state.ui);
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
    switch (planet) {
      case 0:
        setPositionCamera(7, zPosition);
        break;
      case 1:
        setPositionCamera(17, zPosition);
        break;
      case 2:
        setPositionCamera(27, zPosition);
        break;
      case 3:
        setPositionCamera(37, zPosition);
        break;
      case 4:
        setPositionCamera(47, zPosition);
        break;
      case 5:
        setPositionCamera(57, zPosition);
        break;
      case 6:
        setPositionCamera(67, zPosition);
        break;
      case 7:
        setPositionCamera(77, zPosition);
        break;
      case 8:
        setPositionCamera(87, zPosition);
        break;
      case 9:
        setPositionCamera(97, zPosition);
        break;
      default:
        break;
    }
  });
  return (
    <group>
      {/* {nav === "explore" && <OrbitControls />} */}
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0.3, 5]} />

      <Planet name={"pluto"} position={[0, 0, 90]} />
      <Planet name={"neptune"} position={[0, 0, 80]} />
      <Planet name={"uranus"} position={[0, 0, 70]} />
      <Planet name={"saturn"} position={[0, 0, 60]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[2, 32]} />
          <meshStandardMaterial color="white" />
        </mesh>
      </Planet>
      <Planet name={"jupiter"} position={[0, 0, 50]} />
      <Planet name={"mars"} position={[0, 0, 40]} />
      <Planet name={"earth"} position={[0, 0, 30]}>
        <Planet name={"moon"} position={[0, 0, 3]} scale={0.1} />
      </Planet>
      <Planet name={"venus"} position={[0, 0, 20]} />
      <Planet name={"mercury"} position={[0, 0, 10]} />
      <Planet
        ambientLight="#b0b0b0"
        emissive="#700000"
        name={"sun"}
        position={[0, 0, 0]}
      />
    </group>
  );
};
