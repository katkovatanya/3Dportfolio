import { create } from "zustand";

interface ISceneState {
  count: number;
}

export const useSceneSlice = create<ISceneState>((set, get) => ({
  count: 0,
}));
