import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";
import { Group } from "three";

function Model() {
  const { scene } = useGLTF("/models/myBear.glb");

  const modelRef = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += hovered ? 0 : 0.01; // Stop muter pas hover
      modelRef.current.position.y = hovered
        ? Math.sin(Date.now() * 0.002) * 0.2
        : 0; // Efek floating dikit
    }
  });

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Rotasi otomatis di sumbu Y
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={1}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    />
  );
}

export default function ThreeDModel() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 6, 2]} intensity={1} />
      <Model />
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
}
