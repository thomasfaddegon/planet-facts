import { useStore } from "../store";

const PlanetImage: React.FC = ({}) => {
  const { currentPlanet, currentSection } = useStore();

  let imgURL;

  switch (currentSection) {
    case "overview":
      imgURL = `/images/planet-${currentPlanet}.svg`;
    case "geology":
      imgURL = `/images/planet-${currentPlanet}.svg`;
      break;
    case "structure":
      imgURL = `/images/planet-${currentPlanet}-internal.svg`;
      break;
    default:
      imgURL = `/images/planet-${currentPlanet}.svg`;
  }

  return (
    <div className="m-2 flex flex-col justify-center h-full  relative">
      <img src={imgURL} className="" alt="planet" />
      {currentSection === "geology" && (
        <img
          src={`/images/geology-${currentPlanet}.png`}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6 w-1/3 z-20"
        ></img>
      )}
    </div>
  );
};

export default PlanetImage;
