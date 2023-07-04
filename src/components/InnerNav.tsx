import React from "react";
import TransparentButton from "./TransparentButton";
import { useStore } from "../store";

const InnerNav: React.FC = ({}) => {
  const { changeSection, currentSection } = useStore();

  console.log(currentSection);

  return (
    <div className="flex flex-col gap-4">
      <TransparentButton
        id="overview"
        number="01"
        text="Overview"
        onClick={() => changeSection("overview")}
        active={currentSection === "overview"}
      />
      <TransparentButton
        id="structure"
        number="02"
        text="Internal Structure"
        onClick={() => changeSection("structure")}
        active={currentSection === "structure"}
      />
      <TransparentButton
        id="geology"
        number="03"
        text="Surface Geology"
        onClick={() => changeSection("geology")}
        active={currentSection === "geology"}
      />
    </div>
  );
};

export default InnerNav;
