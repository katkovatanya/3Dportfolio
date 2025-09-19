const createCanvas = (container: HTMLDivElement) => {
  const canvas = document.createElement("canvas");
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  container.prepend(canvas);
  return canvas;
};

export { createCanvas };
