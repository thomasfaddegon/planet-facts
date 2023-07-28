import { useStore } from "../store";

const PlanetImage: React.FC = () => {
  const { currentPlanet, currentSection } = useStore();

  const sizes: { [key: string]: string } = {
    mercury: "45%",
    venus: "55%",
    earth: "65%",
    mars: "55%",
    jupiter: "90%",
    saturn: "90%",
    uranus: "70%",
    neptune: "80%",
  };

  let size: string = sizes[currentPlanet] || "50%";

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

  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
    width: size,
    animation: "floatUpDown 5s ease-in-out infinite", // Add the animation property here
  };

  return (
    <div className="m-2 flex flex-col justify-center items-center h-full relative">
      <img src={imgURL} style={imageStyle} alt="planet" />
      {currentSection === "geology" && (
        <img
          src={`/images/geology-${currentPlanet}.png`}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-[25%] w-1/6 z-20"
          alt="geology"
        />
      )}
    </div>
  );
};

export default PlanetImage;
