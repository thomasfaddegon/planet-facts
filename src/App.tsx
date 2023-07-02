import "./App.css";
import LinkButton from "./components/TransparentButton";
import FactBox from "./components/FactBox";
import Nav from "./components/Nav";
import Planet from "./components/Planet";

function App() {
  const planet = "earth";

  return (
    <div className="">
      <Nav />
      <div className="flex-column flex min-h-[100vh] w-full justify-center pt-24">
        <Planet planet="earth" />
      </div>
    </div>
  );
}

export default App;
