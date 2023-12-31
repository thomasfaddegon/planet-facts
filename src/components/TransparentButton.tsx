import React, { useState } from "react";
import { useStore } from "../store";

interface TransparentButtonProps {
  id: string;
  number: string;
  text: string;
  onClick: () => void;
  active: boolean;
}

const TransparentButton: React.FC<TransparentButtonProps> = ({
  number,
  text,
  onClick,
  active,
}) => {
  const { currentColor } = useStore();
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: active
      ? currentColor
      : isHovered
      ? "#2B2B3F"
      : "transparent",
  };

  return (
    <div
      className="font-league-spartan flex w-full cursor-pointer flex-row rounded-sm border border-darkGrey p-4 text-center text-sm font-medium uppercase"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={buttonStyle}
    >
      <div className="number pl-3 pr-6">{number}</div>
      <div className="text uppercase">{text}</div>
    </div>
  );
};

export default TransparentButton;
