import { Engine, Scene } from "@babylonjs/core";

const createScene = (engine: Engine) => {
  const scene = new Scene(engine);
  scene.debugLayer.show({
    handleResize: true,
    overlay: true,
  });
  return scene;
};

export { createScene };
