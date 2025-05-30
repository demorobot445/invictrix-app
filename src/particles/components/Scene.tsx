import {
  OrbitControls,
  OrthographicCamera,
  ScrollControls,
} from "@react-three/drei";
import { Cloud } from "../particleCloud";
import { Points } from "three";
import { forwardRef } from "react";

interface SceneProps {
  customModelUrl?: string;
  disableHover?: boolean;
}

const Scene = forwardRef<Points, SceneProps>((props, ref) => {
  const { customModelUrl, disableHover } = props;

  return (
    <Cloud
      ref={ref}
      customModelUrl={customModelUrl}
      disableHover={disableHover}
    />
  );
});

Scene.displayName = "Scene";

export default Scene;
