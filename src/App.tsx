import "./App.css";
import LinkButton from "./components/LinkButton";
import FactBox from "./components/FactBox";
import Nav from "./components/Nav";

function App() {
  const planet = "earth";

  return (
    <div className="">
      <Nav />
      <div className="flex-column flex min-h-[100vh] w-full justify-center pt-24">
        <div className="max-w-[1250px] px-4">
          {/* row with planet and info */}
          <div className="flex md:flex-row">
            <div className="m-2 flex w-8/12 justify-center">
              <img
                src={`/images/planet-${planet}.svg`}
                className="pr-12 pt-6 lg:pb-10"
                alt="planet"
              />
            </div>

            {/* facts column  */}
            <div className="flex w-4/12 flex-col gap-8 pl-6">
              <h1 className="text-7xl">Earth</h1>
              <p className="spartan pr-2 tracking-wide">
                Third planet from the Sun and the only known planet to harbor
                life. About 29.2% of Earth's surface is land with remaining
                70.8% is covered with water. Earth's distance from the Sun,
                physical properties and geological history have allowed life to
                evolve and thrive.
              </p>
              <p>Source: Wikipedia</p>

              {/* buttons  */}
              <div className="flex flex-col gap-4">
                <LinkButton number="01" text="Overview" />
                <LinkButton number="02" text="Internal Structure" />
                <LinkButton number="03" text="Surface Geology" />
              </div>
            </div>
          </div>
          <div className="mt-20 flex h-32 w-full flex-row gap-8">
            <FactBox metricName="Rotation Time" metricValue="0.99 Days" />
            <FactBox metricName="Revolution Time" metricValue="58.6 Days" />
            <FactBox metricName="Radius" metricValue="58.6 Days" />
            <FactBox metricName="Average Temp." metricValue="58.6 Days" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
