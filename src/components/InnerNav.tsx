import React from "react";
import TransparentButton from "./TransparentButton";
import { useStore } from "../store";

const InnerNav: React.FC = ({}) => {
  const { changeSection } = useStore();

  return (
    <div className="flex flex-col gap-4">
      <TransparentButton
        number="01"
        text="Overview"
        onClick={() => changeSection("overview")}
      />
      <TransparentButton
        number="02"
        text="Internal Structure"
        onClick={() => changeSection("structure")}
      />
      <TransparentButton
        number="03"
        text="Surface Geology"
        onClick={() => changeSection("geology")}
      />
    </div>
  );
};

export default InnerNav;
