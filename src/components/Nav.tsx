import React, { useState, useEffect } from "react";
import { useStore } from "../store";
import { PlanetData } from "../types";
import data from "../../data.json";
import SecondaryNav from "./SecondaryNav";

const Nav: React.FC = () => {
  const planets: string[] = [
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune",
  ];

  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const { currentPlanet, changePlanet, currentColor } = useStore();

  // Close the mobile menu if the screen size goes above the breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isNavOpen) {
        setIsNavOpen(false);
      }
    };

    // Attach the resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isNavOpen]);

  // data colors
  const colors = data.map((planet: PlanetData) => {
    return planet.color;
  });

  return (
    <nav className="flex flex-col lg:flex-row">
      <div className="flex w-full h-full lg:h-[6rem] flex-row justify-center border-b-[1px] border-slate-800">
        <div className="flex w-full h-full items-center justify-between md:max-w-[95rem] md:flex-col lg:flex-row py-4 md:py-6 lg:py-0 px-4">
          <h2 className="mb-0 text-3xl md:mb-8 lg:mb-0 self-center uppercase">
            The Planets
          </h2>

          {/* desktop / tablet nav */}
          <ul className="hidden h-[3rem] lg:h-full flex-row gap-4 lg:gap-8 text-sm font-medium uppercase tracking-wider text-veryLightGrey md:flex">
            {planets.map((planet) => {
              const activeStyle =
                planet.toLowerCase() === currentPlanet.toLowerCase()
                  ? {
                      borderTop: `4px solid ${currentColor}`,
                      borderBottom: `4px solid transparent`,
                    }
                  : {};
              return (
                <li
                  className="h-full flex items-center cursor-pointer p-2"
                  key={planet}
                  onClick={() => changePlanet(planet)}
                  style={activeStyle}
                >
                  {planet}
                </li>
              );
            })}
          </ul>

          {/* hamburger */}
          <div className="MOBILE-MENU flex md:hidden">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            </div>
          </div>
        </div>
      </div>
      {!isNavOpen && <SecondaryNav />}
      {isNavOpen && (
        <div className="flex-col flex items-center justify-center mx-6">
          <ul className="mx-8 flex min-h-[250px] w-full flex-col items-center justify-between font-medium tracking-widest text-veryLightGrey">
            {planets.map((planet, index) => (
              <li
                key={planet}
                className="flex flex-row border-b border-slate-800 py-6 uppercase w-full items-center justify-start"
                onClick={() => {
                  setIsNavOpen(false);
                  changePlanet(planet);
                }}
              >
                <div className="mr-6">
                  <div
                    className={`w-5 h-5 rounded-full bg-[${colors[index]}]`}
                    style={{ backgroundColor: colors[index] }}
                  ></div>
                </div>
                {planet}
                <div className="ml-auto">
                  <img src="public/images/icon-chevron.svg" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
