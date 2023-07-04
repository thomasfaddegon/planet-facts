import data from "../data.json";
import { PlanetData } from "./types";

export function getPlanetData(currentPlanet: string): PlanetData | undefined {
  return data.find(
    (planet) => planet.name.toLowerCase() === currentPlanet.toLowerCase()
  );
}

export function colorActiveSection(
  currentSection: string,
  section: string,
  activeColor: string
): string {
  return currentSection === section ? `bg-${activeColor}` : "";
}
