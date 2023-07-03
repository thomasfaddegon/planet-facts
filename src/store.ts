import { create } from "zustand";

export type Store = {
  currentPlanet: string;
  currentSection: string;
  changePlanet: (newPlanet: string) => void;
  changeSection: (newSection: string) => void;
};

export const useStore = create<Store>((set) => ({
  currentPlanet: "earth",
  currentSection: "overview",
  changePlanet: (newPlanet: string) => set({ currentPlanet: newPlanet }),
  changeSection: (newSection: string) => set({ currentSection: newSection }),
}));
