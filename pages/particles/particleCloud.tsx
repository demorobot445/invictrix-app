import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState, forwardRef } from "react";
import { Crown } from "./crown";
import { Points, BufferGeometry } from "three";
import { fragment } from "./shaders/fragment";
import { vertex } from "./shaders/vertex";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTexture } from "@react-three/drei";

interface CloudProps extends React.ComponentPropsWithoutRef<"group"> {
  customModelUrl?: string;
}

const Cloud = forwardRef<Points, CloudProps>((props, forwardedRef) => {
  const { customModelUrl, ...restProps } = props;

  const tl = useRef<gsap.core.Timeline>(gsap.timeline({ paused: true }));
  const [modelLoaded, setModelLoaded] = useState<boolean>(false);

  const texture = useLoader(THREE.TextureLoader, "/logo-black.png");
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
      uSize: { value: 4.5 },
      uMorph2: { value: 0.0 },
      uMorph3: { value: 0.0 },
      uDisperse: { value: 0.0 },
      uResolution: { value: dimensions },
      uTime: { value: 0.0 },
      uPoint: { value: { x: 0, y: 0 } },
      uGradientOffset: { value: 3.5 },
      uGlobalRadius: { value: 1011 },
      colorA: { value: new THREE.Color(0xc6ac73) },
      colorB: { value: new THREE.Color(0xffefca) },
      colorC: { value: new THREE.Color(0xc6ac73) },
      colorD: { value: new THREE.Color(0xc7ac73) },
      uRadius: { value: 0.75 },
      uGradientType: { value: 1 },
      uGradientDirection: {
        value: new THREE.Vector3(0, -0.5, 0.5),
      },
    }),
    [dimensions, texture, texture2],
  );
  useGSAP(
    () => {
      if (
        forwardedRef &&
        "current" in forwardedRef &&
        forwardedRef.current &&
        modelLoaded
      ) {
        const material = forwardedRef.current.material as THREE.ShaderMaterial;

        tl.current.clear();

        tl.current.to(forwardedRef.current.rotation, {
          y: Math.PI,
          duration: 1.5,
          ease: "power1.inOut",
          onUpdate: () => {
            material.uniformsNeedUpdate = true;
          },
        });
        tl.current.to(material.uniforms.uDisperse, {
          value: 1,
          duration: 1.5,
          ease: "power1.inOut",
          onUpdate: () => {
            material.needsUpdate = true;
          },
        });
      }
    },
    { dependencies: [modelLoaded] },
  );
  useFrame(() => {
    if (
      forwardedRef &&
      "current" in forwardedRef &&
      forwardedRef.current &&
      modelLoaded
    ) {
      // tl.current.progress(scroll.offset);

      const material = forwardedRef.current.material as THREE.ShaderMaterial;
      if (material) {
        material.uniformsNeedUpdate = true;
      }
    }
  });

  useEffect(() => {
    setDimensions({ x: window.innerWidth, y: window.innerHeight });
  }, []); // This effect ensures the forwarded ref is updated when the model is loaded
  useEffect(() => {
    if (
      modelLoaded &&
      geometry &&
      forwardedRef &&
      typeof forwardedRef === "object"
    ) {
      // Signal that the model is ready through the ref
      if (forwardedRef.current) {
        // Trigger a re-render to ensure the ref is properly populated
        forwardedRef.current.updateMatrix();
      }
    }
  }, [modelLoaded, geometry, forwardedRef]);
  useEffect(() => {
    async function createGeometry() {
      setModelLoaded(false);

      const maxVertices = 70000;
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

  // Move the return null inside the component render logic
  if (!geometry) {
    return null;
  }

  return (
    <points
      ref={forwardedRef}
      geometry={geometry}
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
  );
});

Cloud.displayName = "Cloud";

export { Cloud };
