import React from "react";
import FactBox from "./FactBox";
import { useStore } from "../store";
import { getPlanetData } from "../utils";

const FactRow: React.FC = ({}) => {
  const { currentPlanet } = useStore();

  const planetData = getPlanetData(currentPlanet);

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
