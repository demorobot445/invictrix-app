import { BufferGeometry, Float32BufferAttribute, Mesh } from 'three';
import loadObject from './loadObject';

class MeshObject {
  protected geometry: BufferGeometry | null = null;
  normal: Float32BufferAttribute | null = null;
  position: Float32BufferAttribute | null = null;
  uv: Float32BufferAttribute | null = null;
  randomPosition: Float32BufferAttribute | null = null;

  private maxVertices: number = 200_000;

  constructor(private meshPath: string, maxVertices: number) {
    this.meshPath = meshPath;
    this.maxVertices = maxVertices;
    this.geometry = null;
  }

  async init() {
    await this.setGeometry(this.meshPath);
    this.setNormal();
    this.setPosition();
    this.setUV();
    this.setRandomPosition();
  }

  protected async setGeometry(meshPath: string) {
    const mesh = (await loadObject(meshPath)) as Mesh;
    if (!mesh) return null;

    this.geometry = mesh.geometry;
    return mesh;
  }

  private setNormal() {
    let newNormal: number[] = [];
    if (!this.geometry) return;

    if (this.geometry.attributes.normal.array.length > this.maxVertices * 3) {
      newNormal = [
        // @ts-ignore
        ...this.geometry.attributes.normal.array.slice(0, this.maxVertices * 3),
      ];
    } else if (
      this.geometry.attributes.normal.array.length <
      this.maxVertices * 3
    ) {
      newNormal = [
        // @ts-ignore
        ...this.geometry.attributes.normal.array,
        ...new Array(
          this.maxVertices * 3 - this.geometry.attributes.normal.array.length
        ).fill(0),
      ];
    }

    this.normal = new Float32BufferAttribute(
      newNormal.length ? newNormal : this.geometry.attributes.normal.array,
      3
    );
  }

  private setPosition() {
    if (!this.geometry) return;
    let newPosition: number[] = [];
    if (this.geometry.attributes.position.array.length > this.maxVertices * 3) {
      newPosition = [
        // @ts-ignore
        ...this.geometry.attributes.position.array.slice(
          0,
          this.maxVertices * 3
        ),
      ];
    } else if (
      this.geometry.attributes.position.array.length <
      this.maxVertices * 3
    ) {
      newPosition = [
        // @ts-ignore
        ...this.geometry.attributes.position.array,
        ...new Array(
          this.maxVertices * 3 - this.geometry.attributes.position.array.length
        ).fill(Math.random() * 10000),
      ];
    }

    this.position = new Float32BufferAttribute(
      newPosition.length
        ? newPosition
        : this.geometry.attributes.position.array,
      3
    );
  }

  private setUV() {
    if (!this.geometry) return;

    if (this.geometry.attributes.uv)
      this.uv = new Float32BufferAttribute(
        this.geometry.attributes.uv.array,
        3
      );
  }

  private setRandomPosition() {
    if (!this.position) return;
    const randVertices = [];

    const scale = 25;
    for (let i = 0; i < this.position.array.length / 3; i++)
      randVertices.push(
        // Random range between -scale and scale
        Math.random() * scale - scale / 2,
        Math.random() * scale - scale / 2,
        Math.random() * scale - scale / 2
      );

    this.randomPosition = new Float32BufferAttribute(randVertices, 3);
  }
}

export { MeshObject };
