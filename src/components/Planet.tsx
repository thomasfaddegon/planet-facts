import React from "react";
import FactBox from "./FactBox";
import TransparentButton from "./TransparentButton";
import InnerNav from "./InnerNav";
import FactRow from "./FactRow";

interface PlanetProps {
  planet: string;
}

const Planet: React.FC<PlanetProps> = ({ planet }) => {
  return (
    <div className="max-w-[78rem] px-4">
      {/* row with planet and info */}
      <div className="flex md:flex-row">
        <div className="m-2 flex w-8/12 justify-center">
          <img
            src={`/images/planet-${planet}.svg`}
            className="pr-12 pt-6 lg:pb-10"
            alt="planet"
          />
        </div>

        {/* facts column  */}
        <div className="flex w-4/12 flex-col gap-8 pl-6">
          <h1 className="text-7xl">Earth</h1>
          <p className="spartan pr-2 tracking-wide">
            Third planet from the Sun and the only known planet to harbor life.
            About 29.2% of Earth's surface is land with remaining 70.8% is
            covered with water. Earth's distance from the Sun, physical
            properties and geological history have allowed life to evolve and
            thrive.
          </p>
          <p>Source: Wikipedia</p>

          {/* buttons  */}
          <InnerNav active={""} planet={""} />
        </div>
      </div>
      <FactRow />
    </div>
  );
};

export default Planet;
