import React from "react";

interface TransparentButtonProps {
  number: string;
  text: string;
  onClick: () => void;
  active?: boolean;
  hover?: string;
}

const TransparentButton: React.FC<TransparentButtonProps> = ({
  number,
  text,
  onClick,
}) => {
  return (
    <div
      className="font-league-spartan flex w-full cursor-pointer flex-row rounded-sm border border-darkGrey p-4 text-center text-sm font-medium uppercase transition-all duration-300 ease-in-out"
      onClick={onClick}
    >
      <div className="number pl-3 pr-6">{number}</div>
      <div className="text uppercase">{text}</div>
    </div>
  );
};

export default TransparentButton;
