import { initBabylon } from "@/widgets/babylon/lib/initBabylon";
import { FC, useEffect, useRef } from "react";
import "./App.css";

const App: FC = () => {
  const babylonContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const babylonContainer = babylonContainerRef.current;
    if (babylonContainer) {
      initBabylon(babylonContainer);
    }
  }, []);

  return (
    <>
      <div className="canvas-wrapper" ref={babylonContainerRef}></div>
    </>
  );
};

export { App };
