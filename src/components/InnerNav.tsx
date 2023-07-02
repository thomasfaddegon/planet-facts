import React from "react";
import TransparentButton from "./TransparentButton";

// interface InnerNavProps {
//   active: string;
//   planet: string;
// }

const InnerNav: React.FC = ({}) => {
  return (
    <div className="flex flex-col gap-4">
      <TransparentButton number="01" text="Overview" />
      <TransparentButton number="02" text="Internal Structure" />
      <TransparentButton number="03" text="Surface Geology" />
    </div>
  );
};

export default InnerNav;
