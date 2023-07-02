import React from "react";
import { Store, useStore } from "../store";
import data from "../../data.json";
import { PlanetData, Section } from "../types";

const MainInfo: React.FC = () => {
  const currentPlanet = useStore((state: Store) => state.planet);
  const currentSection = useStore((state: Store) => state.section) as Section;

  const planetData: PlanetData | undefined = data.find(
    (planet) => planet.name.toLowerCase() === currentPlanet.toLowerCase()
  );

  console.log(planetData);

  return (
    <div className="flex flex-col gap-8 ">
      <h1 className="text-7xl">{planetData?.name}</h1>
      <p className="spartan pr-2 tracking-wide min-h-[10rem]">
        {planetData?.[currentSection].content}
      </p>
      <p>
        <a href={planetData?.[currentSection].source}>Source: Wikipedia</a>{" "}
      </p>
    </div>
  );
};

export default MainInfo;
