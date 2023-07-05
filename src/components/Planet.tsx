import PlanetImage from "./PlanetImage";
import React from "react";
import InnerNav from "./InnerNav";
import FactRow from "./FactRow";
import MainInfo from "./MainInfo";

const Planet: React.FC = ({}) => {
  return (
    <div className="max-w-[78rem] px-4">
      {/* row with planet and info */}
      <div className="flex flex-col lg:flex-row min-h-[42rem] items-center lg:items-stretch">
        <PlanetImage />
        {/* facts column  */}
        <div className="flex lg:w-4/12 flex-row lg:flex-col gap-8 lg:pl-6 mt-16 lg:mt-0 p-4 lg:p-0 ">
          <div className="w-7/12 lg:w-full">
            <MainInfo />
          </div>
          <div className="w-5/12 lg:w-full hidden md:block">
            <InnerNav />
          </div>
        </div>
      </div>
      <FactRow />
    </div>
  );
};

export default Planet;
