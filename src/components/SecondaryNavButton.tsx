import React from "react";
import { useStore } from "../store";

interface SecondaryNavButtonProps {
  text: string;
  id: string;
}

const SecondaryNavButton: React.FC<SecondaryNavButtonProps> = ({
  text,
  id,
}) => {
  const { currentColor, changeSection, currentSection } = useStore();

  console.log(currentSection);

  let buttonStyle;
  id === currentSection
    ? (buttonStyle = {
        borderTop: `4px solid ${currentColor}`,
        borderBottom: `4px solid transparent`,
      })
    : (buttonStyle = {});

  return (
    <div
      className="flex items-center text-[.8rem] font-normal tracking-[.12rem] uppercase h-full"
      onClick={() => changeSection(id)}
      style={buttonStyle}
    >
      {text}
    </div>
  );
};

export default SecondaryNavButton;
