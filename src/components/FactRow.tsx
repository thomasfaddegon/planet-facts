import React from "react";
import FactBox from "./FactBox";
import data from "../../data.json";
import { useStore, Store } from "../store";
import { PlanetData } from "../types";

const FactRow: React.FC = ({}) => {
  const currentPlanet = useStore((state: Store) => state.planet);

  const planetData: PlanetData | undefined = data.find(
    (planet) => planet.name.toLowerCase() === currentPlanet.toLowerCase()
  );

  console.log(planetData);

  return (
    <div className="mt-10 flex h-32 w-full flex-row gap-8">
      <FactBox metricName="Rotation Time" metricValue={planetData?.rotation} />
      <FactBox
        metricName="Revolution Time"
        metricValue={planetData?.revolution}
      />
      <FactBox metricName="Radius" metricValue={planetData?.radius} />
      <FactBox
        metricName="Average Temp."
        metricValue={planetData?.temperature}
      />
    </div>
  );
};

export default FactRow;
