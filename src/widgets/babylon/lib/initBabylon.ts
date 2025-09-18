import { Engine, Scene } from "@babylonjs/core";
import { createEngine } from "@/entities/player/model/scene/model/lib/createEngine";
import { createCanvas } from "@/entities/player/model/scene/model/lib/createCanvas";
import { createScene } from "@/entities/player/model/scene/model/lib/createScene";

export const initBabylon = async (container: HTMLDivElement) => {
  const canvas = createCanvas(container);
  if (!canvas) {
    throw new Error("Не удалось создать canvas");
  }
  // Создание движка
  const engine = await new Promise<Engine>((resolve) => {
    resolve(createEngine(canvas));
  });

  // Создание сцены
  const scene = await new Promise<Scene>((resolve) => {
    resolve(createScene(engine));
  });

  engine.runRenderLoop(() => {
    scene?.render();
  });
};
