import { create } from "zustand";

export type Store = {
  planet: string;
  section: string;
  changePlanet: (newPlanet: string) => void;
  changeSection: (newSection: string) => void;
};

export const useStore = create<Store>((set) => ({
  planet: "earth",
  section: "overview",
  changePlanet: (newPlanet: string) => set({ planet: newPlanet }),
  changeSection: (newSection: string) => set({ section: newSection }),
}));
