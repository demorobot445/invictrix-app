import { BufferAttribute, BufferGeometry } from 'three';
import { MeshObject } from './object';

class CloudGeometry extends BufferGeometry {
  constructor(public objects: MeshObject[]) {
    super();

    objects.forEach((object, index) => {
      if (!object || !object.position || !object.normal) return;

      if (!index) {
        this.setAttribute('position', object.position as BufferAttribute);
        this.setAttribute('aRand', object.randomPosition as BufferAttribute);
        this.setAttribute('normal', object.normal as BufferAttribute);
        return;
      }

      this.setAttribute(`normal${index + 1}`, object.normal as BufferAttribute);

      this.setAttribute(
        `position${index + 1}`,
        object.position as BufferAttribute
      );

      this.setAttribute(
        `aRand${index + 1}`,
        object.position as BufferAttribute
      );
    });
  }
}

export { CloudGeometry };
