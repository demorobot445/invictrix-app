import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState, forwardRef } from "react";
import { Crown } from "./crown";
import { Points, BufferGeometry } from "three";
import { fragment } from "./shaders/fragment";
import { vertex } from "./shaders/vertex";
import { useTexture } from "@react-three/drei";

interface CloudProps extends React.ComponentPropsWithoutRef<"group"> {
  customModelUrl?: string;
  disableHover?: boolean;
}

const Cloud = forwardRef<Points, CloudProps>((props, forwardedRef) => {
  const { customModelUrl, disableHover = false, ...restProps } = props;
  const particlesRef = useRef<Points | null>(null);
  const planeRef = useRef<THREE.Mesh>(null);
  const targetPosition = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));
  const currentPosition = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));

  const [modelLoaded, setModelLoaded] = useState<boolean>(false);

  const texture = useLoader(THREE.TextureLoader, "/logo-final.png");
  const texture2 = useTexture("/radial-gradient.png");

  const [dimensions, setDimensions] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const [geometry, setGeometry] = useState<BufferGeometry | null>(null);
  const uniforms = useMemo(
    () => ({
      uTexture: { value: texture },
      uTexture2: { value: texture2 },
      uSize: { value: 5.0 },
      uMorph2: { value: 0.0 },
      uMorph3: { value: 0.0 },
      uDisperse: { value: 0.0 },
      uResolution: { value: dimensions },
      uTime: { value: 0.0 },
      uPoint: { value: { x: 0, y: 0 } },
      uGlobalRadius: { value: 1011 },
      colorA: { value: new THREE.Color(0xc6ac73) },
      colorB: { value: new THREE.Color(0xffefca) },
      colorC: { value: new THREE.Color(0xc7ac73) },
      colorD: { value: new THREE.Color(0xc7ac73) },
      uRadius: { value: 0.75 },
      uOpacity: { value: 1 },
      uPointerActive: { value: disableHover ? 0.0 : 0.0 }, // Controls visibility of pointer circle
      uGradientDirection: {
        value: new THREE.Vector3(0, 0.2, 0.0),
      },
      uCircleWidth: { value: 1000.0 }, // Width of the central elliptical area
      uCircleHeight: { value: 140.0 }, // Height of the central elliptical area
    }),
    [dimensions, texture, texture2],
  );
  useFrame(({ camera, raycaster, pointer }) => {
    if (!particlesRef.current || !modelLoaded || !planeRef.current) return;

    const material = particlesRef.current.material as THREE.ShaderMaterial;
    if (material) {
      raycaster.setFromCamera(pointer, camera);

      const intersects = raycaster.intersectObjects([planeRef.current], true);
      if (intersects.length > 0) {
        const intersection = intersects[0];
        // Update target position instead of directly setting uPoint
        targetPosition.current.copy(intersection.point);
      }

      // Smooth interpolation towards target position
      const lerpFactor = 0.1; // Adjust this value to control smoothness (0.05-0.2 works well)
      currentPosition.current.lerp(targetPosition.current, lerpFactor);

      // Update the uniform with the smoothed position
      material.uniforms.uPoint.value = currentPosition.current;
      material.uniformsNeedUpdate = true;
    }
  });

  useEffect(() => {
    setDimensions({ x: window.innerWidth, y: window.innerHeight });
  }, []);

  useEffect(() => {
    async function createGeometry() {
      setModelLoaded(false);

      const maxVertices = 300_000;
      const crownModelUrl = customModelUrl || "/logo.glb";
      const crown = new Crown(crownModelUrl, maxVertices);
      await crown.init();

      const combinedGeometry = new BufferGeometry();

      if (crown.position) {
        combinedGeometry.setAttribute("position", crown.position);
      }

      if (crown.normal) {
        combinedGeometry.setAttribute("normal", crown.normal);
      }

      if (crown.randomPosition) {
        combinedGeometry.setAttribute("aRand", crown.randomPosition);
      }
      setGeometry(combinedGeometry);

      // Directly set model as loaded without waiting for animation frame
      setModelLoaded(true);
    }

    createGeometry();
  }, [customModelUrl]);

  if (!geometry) {
    return null;
  }
  return (
    <group>
      <mesh ref={planeRef}>
        <planeGeometry args={[5000, 5000]} />
        <meshBasicMaterial
          color={0xff0000}
          transparent
          opacity={0.0}
          depthTest={false}
          depthWrite={false}
        />
      </mesh>
      <points
        ref={(points) => {
          // @ts-expect-error
          if (points) particlesRef.current = points;
          if (points && forwardedRef) {
            if (typeof forwardedRef === "function") {
              // @ts-expect-error
              forwardedRef(points);
            } else if ("current" in forwardedRef) {
              // @ts-expect-error
              forwardedRef.current = points;
            }
          }
        }}
        geometry={geometry}
        onPointerEnter={() => {
          // Show pointer circle when mouse enters particle cloud (only if hover is not disabled)
          if (particlesRef.current && !disableHover) {
            const material = particlesRef.current
              .material as THREE.ShaderMaterial;
            if (material?.uniforms?.uPointerActive) {
              material.uniforms.uPointerActive.value = 1.0;
              material.uniformsNeedUpdate = true;
            }
          }
        }}
        onPointerLeave={() => {
          // Hide pointer circle when mouse leaves particle cloud (only if hover is not disabled)
          if (particlesRef.current && !disableHover) {
            const material = particlesRef.current
              .material as THREE.ShaderMaterial;
            if (material?.uniforms?.uPointerActive) {
              material.uniforms.uPointerActive.value = 0.0;
              material.uniformsNeedUpdate = true;
            }
          }
        }}
        // scale={[1, 1, 0.4]}
        {...restProps}
      >
        <shaderMaterial
          vertexShader={vertex}
          fragmentShader={fragment}
          uniforms={uniforms}
          depthTest={false}
          depthWrite={false}
          transparent
        />
      </points>
    </group>
  );
});

Cloud.displayName = "Cloud";

export { Cloud };
