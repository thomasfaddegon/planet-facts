import React from "react";
import { useStore } from "../store";
import { getPlanetData } from "../utils";
import { PlanetData, Section } from "../types";

const MainInfo: React.FC = () => {
  const { currentPlanet, currentSection } = useStore();

  const planetData: PlanetData | undefined = getPlanetData(currentPlanet);

  const section: Section = currentSection as Section;

  return (
    <div className="flex flex-col gap-8 text-center md:text-left">
      <h1 className="text-5xl lg:text-7xl">{planetData?.name}</h1>
      <p className="spartan pr-2 tracking-wide lg:min-h-[10rem]">
        {planetData?.[section].content}
      </p>
      <p>
        <a href={planetData?.[section].source}>Source: Wikipedia</a>{" "}
      </p>
    </div>
  );
};

export default MainInfo;
