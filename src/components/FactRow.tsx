<div className="mt-20 flex h-32 w-full flex-row gap-8">
  <FactBox metricName="Rotation Time" metricValue="0.99 Days" />
  <FactBox metricName="Revolution Time" metricValue="58.6 Days" />
  <FactBox metricName="Radius" metricValue="58.6 Days" />
  <FactBox metricName="Average Temp." metricValue="58.6 Days" />
</div>;

import React from "react";
import FactBox from "./FactBox";

const FactRow: React.FC = ({}) => {
  return (
    <div className="mt-10 flex h-32 w-full flex-row gap-8">
      <FactBox metricName="Rotation Time" metricValue="0.99 Days" />
      <FactBox metricName="Revolution Time" metricValue="58.6 Days" />
      <FactBox metricName="Radius" metricValue="58.6 Days" />
      <FactBox metricName="Average Temp." metricValue="58.6 Days" />
    </div>
  );
};

export default FactRow;
