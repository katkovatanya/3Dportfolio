import { MeshBuilder, Scene, StandardMaterial, Texture } from "@babylonjs/core";

const createGround = (scene: Scene) => {
  const ground = MeshBuilder.CreateGround("ground", {
    width: 150,
    height: 150,
  });
  const largeGroundMat = new StandardMaterial("largeGroundMat");
  largeGroundMat.diffuseTexture = new Texture("/textures/marble.jpg");
  ground.material = largeGroundMat;
  return ground;
};

export { createGround };
