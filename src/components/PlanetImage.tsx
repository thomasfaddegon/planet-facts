import { useStore } from "../store";

const PlanetImage: React.FC = () => {
  const { currentPlanet, currentSection } = useStore();

  const sizes: { [key: string]: string } = {
    mercury: "w-28 h-28 md:w-36 md:h-36 lg:w-[19rem] lg:h-[19rem]",
    venus: "w-32 h-32 md:w-44 md:h-44 lg:w-[23rem] lg:h-[23rem]",
    earth: "w-36 h-36 md:w-48 md:h-48 lg:w-[25rem] lg:h-[25rem]",
    mars: "w-32 h-32 md:w-44 md:h-44 lg:w-[20rem] lg:h-[20rem]",
    jupiter: "w-44 h-44 md:w-64 md:h-64 lg:w-[36rem] lg:h-[36rem]",
    saturn: "w-48 h-48 md:w-64 md:h-64 lg:w-[34rem] lg:h-[34rem]",
    uranus: "w-40 h-40 md:w-56 md:h-56 lg:w-[30rem] lg:h-[30rem]",
    neptune: "w-40 h-40 md:w-56 md:h-56 lg:w-[30rem] lg:h-[30rem]",
  };

  let imgURL;

  switch (currentSection) {
    case "overview":
    case "geology":
      imgURL = `/images/planet-${currentPlanet}.svg`;
      break;
    case "structure":
      imgURL = `/images/planet-${currentPlanet}-internal.svg`;
      break;
    default:
      imgURL = `/images/planet-${currentPlanet}.svg`;
  }

  console.log(sizes[currentPlanet]);

  let size: string =
    sizes[currentPlanet] || "w-32 h-32 md:w-40 md:h-40 lg:w-56 lg:h-56";

  return (
    <div className="m-2 flex flex-col justify-center items-center h-full relative ">
      <img
        src={imgURL}
        className={`${size} animate-floatUpDown `}
        alt="planet"
      />
      {currentSection === "geology" && (
        <img
          src={`/images/geology-${currentPlanet}.png`}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-[25%] w-1/3 lg:w-1/6 z-20"
          alt="geology"
        />
      )}
    </div>
  );
};

export default PlanetImage;
