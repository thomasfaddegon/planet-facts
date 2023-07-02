import PlanetImage from "./PlanetImage";
import React from "react";
import InnerNav from "./InnerNav";
import FactRow from "./FactRow";
import MainInfo from "./MainInfo";

const Planet: React.FC = ({}) => {
  return (
    <div className="max-w-[78rem] px-4">
      {/* row with planet and info */}
      <div className="flex md:flex-row">
        <PlanetImage />
        {/* facts column  */}
        <div className="flex w-4/12 flex-col gap-8 pl-6">
          <MainInfo />
          <InnerNav />
        </div>
      </div>
      <FactRow />
    </div>
  );
};

export default Planet;
