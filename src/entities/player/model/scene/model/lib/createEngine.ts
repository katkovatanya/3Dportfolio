import { Engine, Logger } from "@babylonjs/core";

const createEngine = (canvas: HTMLCanvasElement) => {
  Logger.LogLevels = Logger.NoneLogLevel;
  Logger.ClearLogCache();
  const engine = new Engine(canvas, true, {
    adaptToDeviceRatio: true,
    antialias: true,
  });
  return engine;
};

export { createEngine };
