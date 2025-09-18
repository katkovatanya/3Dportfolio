import { create } from "zustand";

interface IPlayerState {
  count: number;
}

export const usePlayerSlice = create<IPlayerState>((set, get) => ({
  count: 0,
}));
