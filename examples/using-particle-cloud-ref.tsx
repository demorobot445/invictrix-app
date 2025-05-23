// This is an example of how to use the ref with the Cloud component
import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Points } from "three";
import Scene from "../pages/particles/components/Scene";
import * as THREE from "three";

export default function ParticleExample() {
  // Create a ref to access the Points component
  const particlesRef = useRef<Points>(null);

  // Example function to manipulate the particles
  const handleManipulateParticles = () => {
    if (particlesRef.current) {
      // You can now access the Points object
      // For example, you can rotate it:
      particlesRef.current.rotation.y += Math.PI / 4;

      // Or access its material (if you need to change uniforms)
      const material = particlesRef.current.material as THREE.ShaderMaterial;
      if (material && material.uniforms) {
        // Example: change a uniform value
        if (material.uniforms.uDisperse) {
          material.uniforms.uDisperse.value = 0.5;
          material.uniformsNeedUpdate = true;
        }
      }
    }
  };

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <button onClick={handleManipulateParticles}>Manipulate Particles</button>

      <Canvas>
        {/* Pass the ref to the Scene component */}
        <Scene ref={particlesRef} />
      </Canvas>
    </div>
  );
}
