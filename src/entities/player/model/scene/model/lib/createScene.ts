import { Engine, Scene } from "@babylonjs/core";

const createScene = (engine: Engine) => {
  const scene = new Scene(engine);
  return scene;
};

export { createScene };
