import React from "react";
import SecondaryNavButton from "./SecondaryNavButton";

const SecondaryNav: React.FC = ({}) => {
  return (
    <div className="flex flex-row md:hidden  px-4 gap-10 justify-between h-14 border-b border-slate-800">
      <SecondaryNavButton text="overview" id="overview" />
      <SecondaryNavButton text="structure" id="structure" />
      <SecondaryNavButton text="surface" id="geology" />
    </div>
  );
};

export default SecondaryNav;
