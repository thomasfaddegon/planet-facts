import React from "react";
import { useStore } from "../store";
import { getPlanetData } from "../utils";
import { PlanetData, Section } from "../types";
import arrow from "../../public/images/icon-source.svg";

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

      <div className="flex flex-row items-center justify-center md:justify-start gap-1 hover:underline">
        <a
          href={planetData?.[section].source}
          target="_blank"
          className="flex flex-row gap-1 items-center"
        >
          <p>Source: Wikipedia</p>
          <img src={arrow} className="w-3 h-3 translate-y-[-1px]" />
          {""}
        </a>
      </div>
    </div>
  );
};

export default MainInfo;
