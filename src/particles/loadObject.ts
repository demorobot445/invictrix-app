import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export default async function loadObject(url: string) {
  let model = null;
  try {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
    const loader = new GLTFLoader();

    loader.setDRACOLoader(dracoLoader);

    model = await loader.loadAsync(url);

    return model.scene.children[0];
  } catch (ex) {
    return null;
  }
}
