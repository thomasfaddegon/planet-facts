import React, { useState, useEffect } from "react";
import { useStore } from "../store";

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

  // li styles
  const listItemStyles =
    "flex flex-row border-b border-slate-800 py-6 uppercase w-full items-center justify-start";

  return (
    <nav>
      <div className="flex w-full h-[6rem] flex-row justify-center border-b-[1px] border-slate-800">
        <div className="flex w-full h-full justify-between md:w-[95rem] md:flex-col lg:flex-row px-4">
          <h2 className="mb-0 text-3xl md:mb-12 lg:mb-0 self-center">
            THE PLANETS
          </h2>

          {/* desktop / tablet nav */}
          <ul className="hidden h-fullflex-row gap-8 text-sm font-medium uppercase tracking-wider text-veryLightGrey md:flex">
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

      {/* mobile nav */}
      {isNavOpen && (
        <div className="flex-column flex items-center justify-center">
          <ul className="mx-8 flex min-h-[250px] w-full flex-col items-center justify-between font-medium tracking-widest text-veryLightGrey">
            <li className={listItemStyles}>
              <span className="mr-5">O</span>
              <a href="/mercury">Mercury</a>
              <div className="ml-auto mr-4">A</div>
            </li>
            <li className={listItemStyles}>
              <span className="mr-5">O</span>
              <a href="/earth">Earth</a>
              <div className="ml-auto mr-4">A</div>
            </li>
            <li className={listItemStyles}>
              <span className="mr-5">O</span>
              <a href="/mars">Mars</a>
              <div className="ml-auto mr-4">A</div>
            </li>
            <li className={listItemStyles}>
              <span className="mr-5">O</span>
              <a href="/jupiter">Jupiter</a>
              <div className="ml-auto mr-4">A</div>
            </li>
            <li className={listItemStyles}>
              <span className="mr-5">O</span>
              <a href="/saturn">Saturn</a>
              <div className="ml-auto mr-4">A</div>
            </li>
            <li className={listItemStyles}>
              <span className="mr-5">O</span>
              <a href="/uranus">Uranus</a>
              <div className="ml-auto mr-4">A</div>
            </li>
            <li className={listItemStyles}>
              <span className="mr-5">O</span>
              <a href="/neptune">Neptune</a>
              <div className="ml-auto mr-4">A</div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
