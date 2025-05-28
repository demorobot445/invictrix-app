import { useGLTF } from '@react-three/drei';
import { JSX, useEffect, useState } from 'react';

type Props = JSX.IntrinsicElements['group'] & {
  modelUrl?: string; // Add modelUrl prop
};

export function Crown(props: Props) {
  const { modelUrl, ...restProps } = props;
  const [modelPath, setModelPath] = useState<string>('/logo.glb');

  // Update model path when modelUrl prop changes
  useEffect(() => {
    if (modelUrl) {
      setModelPath(modelUrl);
    }
  }, [modelUrl]);

  const { nodes } = useGLTF(modelPath);

  return (
    <group
      {...restProps}
      dispose={null}
      rotation={[Math.PI / 2, 0, 0]}
      scale={0.5}
    >
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes.Plane005?.geometry || Object.values(nodes)[0]?.geometry}
        // @ts-ignore
        material={nodes.Plane005?.material || Object.values(nodes)[0]?.material}
      />
    </group>
  );
}

// Don't hardcode the preload, use dynamic preloading
export function preloadCrownModel(modelPath: string = '/logo.glb') {
  useGLTF.preload(modelPath);
}

// Preload the default model
preloadCrownModel();
