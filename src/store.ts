import { create } from "zustand";
import data from "../data.json";

export type Store = {
  currentPlanet: string;
  currentSection: string;
  currentColor: string;
  changePlanet: (newPlanet: string) => void;
  changeSection: (newSection: string) => void;
};

export const useStore = create<Store>((set) => ({
  currentPlanet: "earth",
  currentSection: "overview",
  currentColor: "#6F2ED6",
  changePlanet: (newPlanet: string) => {
    const selectedPlanet = data.find(
      (planet) => planet.name.toLowerCase() === newPlanet.toLowerCase()
    );
    const color = selectedPlanet?.color || "#6F2ED6";
    set({
      currentPlanet: newPlanet,
      currentColor: color,
      currentSection: "overview",
    });
  },
  changeSection: (newSection: string) => set({ currentSection: newSection }),
}));
