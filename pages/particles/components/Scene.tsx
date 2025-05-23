import { Cloud } from "../particleCloud";
import { Points } from "three";
import { forwardRef } from "react";

interface SceneProps {
  customModelUrl?: string;
}

const Scene = forwardRef<Points, SceneProps>((props, ref) => {
  const { customModelUrl } = props;

  return <Cloud ref={ref} customModelUrl={customModelUrl} />;
});

Scene.displayName = "Scene";

export default Scene;
