import React from "react";

interface FactBoxProps {
  metricName: string;
  metricValue: string | undefined;
}

const FactBox: React.FC<FactBoxProps> = ({ metricName, metricValue }) => {
  return (
    <div className="font-league-spartan flex w-full flex-row justify-between md:flex-col md:justify-center rounded-sm border border-darkGrey p-2 md:p-3 lg:p-5 font-medium uppercase transition-all duration-300 ease-in-out">
      <h4 className="text-[.75rem] md:text-xs lg:text-sm self-center md:self-auto tracking-widest text-lightGrey">
        {metricName}
      </h4>
      <h2 className="tracking-narrow text-[1.5rem] md:text-[1.7rem] lg:text-[2.5rem] uppercase text-white">
        {metricValue}
      </h2>
    </div>
  );
};

export default FactBox;
