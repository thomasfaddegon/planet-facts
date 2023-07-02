import React from "react";

interface FactBoxProps {
  metricName: string;
  metricValue: string;
}

const FactBox: React.FC<FactBoxProps> = ({ metricName, metricValue }) => {
  return (
    <div className="font-league-spartan flex w-full flex-col justify-center rounded-sm border border-darkGrey p-5 font-medium uppercase transition-all duration-300 ease-in-out">
      <h4 className="text-sm tracking-widest text-lightGrey">{metricName}</h4>
      <h2 className="tracking-narrow text-[2.5rem] uppercase text-white">
        {metricValue}
      </h2>
    </div>
  );
};

export default FactBox;
