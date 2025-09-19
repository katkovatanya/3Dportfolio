import {
  ArcRotateCamera,
  Color3,
  CubeTexture,
  Engine,
  HemisphericLight,
  MeshBuilder,
  Scene,
  StandardMaterial,
  Texture,
  Vector3,
} from "@babylonjs/core";
import { createEngine } from "@/entities/player/model/scene/model/lib/createEngine";
import { createCanvas } from "@/entities/player/model/scene/model/lib/createCanvas";
import { createScene } from "@/entities/player/model/scene/model/lib/createScene";
import { DebugLayer } from "@babylonjs/core";
import "@babylonjs/inspector";
import { createSky } from "@/entities/player/model/scene/model/lib/createSky";
import { createGround } from "@/entities/player/model/scene/model/lib/createGround";

export const initBabylon = async (container: HTMLDivElement) => {
  const canvas = createCanvas(container);
  if (!canvas) {
    throw new Error("Не удалось создать canvas");
  }

  const engine = await new Promise<Engine>((resolve) => {
    resolve(createEngine(canvas));
  });

  const scene = await new Promise<Scene>((resolve) => {
    resolve(createScene(engine));
  });

  var camera: ArcRotateCamera = new ArcRotateCamera(
    "Camera",
    Math.PI / 2,
    Math.PI / 2,
    2,
    new Vector3(0, 2, 0),
    scene
  );
  camera.attachControl(canvas, true);

  const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

  // hide/show the Inspector
  window.addEventListener("keydown", (ev) => {
    if (ev.shiftKey) {
      if (scene.debugLayer.isVisible()) {
        scene.debugLayer.hide();
      } else {
        scene.debugLayer.show();
      }
    }
  });

  const ground = createGround(scene);

  const skybox = createSky(scene);
  engine.runRenderLoop(() => {
    scene?.render();
  });
};
