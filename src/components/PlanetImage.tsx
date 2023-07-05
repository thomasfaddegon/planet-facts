import { useStore } from "../store";

const PlanetImage: React.FC = ({}) => {
  const { currentPlanet } = useStore();

  return (
    <div className="m-2 flex w-8/12 justify-center">
      <img
        src={`/images/planet-${currentPlanet}.svg`}
        className="lg:pr-12 pt-6 lg:pb-10"
        alt="planet"
      />
    </div>
  );
};

export default PlanetImage;
