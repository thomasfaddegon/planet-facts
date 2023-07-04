import React from "react";
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

  const buttonStyle = {
    backgroundColor: active ? currentColor : "transparent",
  };

  return (
    <div
      className="font-league-spartan flex w-full cursor-pointer flex-row rounded-sm border border-darkGrey p-4 text-center text-sm font-medium uppercase transition-all duration-200 ease-in-out"
      onClick={onClick}
      style={buttonStyle}
    >
      <div className="number pl-3 pr-6">{number}</div>
      <div className="text uppercase">{text}</div>
    </div>
  );
};

export default TransparentButton;
