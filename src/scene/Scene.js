import React, { useContext, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

import { Solar } from "./Solar";

export const Scene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.03} />
      <color attach="background" args={["#191920"]} />
      <Solar />
      <pointLight position={[100, 0, 100]} intensity={2} />
      <Stars radius={200} />
    </Canvas>
  );
};
