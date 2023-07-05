import PlanetImage from "./PlanetImage";
import React from "react";
import InnerNav from "./InnerNav";
import FactRow from "./FactRow";
import MainInfo from "./MainInfo";

const Planet: React.FC = ({}) => {
  return (
    <div className="max-w-[78rem] px-4">
      {/* row with planet and info */}
      <div className="flex flex-col lg:flex-row min-h-[42rem] items-center lg:items-stretch lg:mb-12">
        <div className="lg:w-8/12 pl-8 pr-12">
          <PlanetImage />
        </div>

        {/* facts column  */}
        <div className="flex lg:w-4/12 flex-row lg:flex-col gap-8 lg:pl-6 mt-16 lg:mt-0 md:p-4 lg:p-0 justify-center">
          <div className="md:w-7/12 lg:w-full">
            <MainInfo />
          </div>
          <div className="w-5/12 lg:w-full hidden md:block">
            <InnerNav />
          </div>
        </div>
      </div>
      <div className="md:px-4 lg:px-0">
        <FactRow />
      </div>
    </div>
  );
};

export default Planet;
