import { MeshObject } from './object';

class Crown extends MeshObject {
  protected async setGeometry(meshPath: string) {
    const result = await super.setGeometry(meshPath);

    const scale = 25;
    if (result) {
      result.geometry.scale(scale, scale, scale);
      // result.geometry.translate(20, -200, 0);
      result.geometry.rotateX(Math.PI / 2);
      this.geometry = result.geometry;
    }

    return result;
  }
}

export { Crown };
