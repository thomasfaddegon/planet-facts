import "./App.css";

import Nav from "./components/Nav";
import Planet from "./components/Planet";
import backgroundStars from "../public/images/background-stars.svg";

function App() {
  return (
    <div
      className="flex flex-col mb-8 h-[100vh] bg-zooming"
      style={{ backgroundImage: `url(${backgroundStars})` }}
    >
      <div className="flex flex-col mb-8 ">
        <Nav />
        <div className="flex-col flex w-full justify-center items-center pt-12 lg:pt-8 mb-32 md:mb-0">
          <Planet />
        </div>
      </div>
    </div>
  );
}

export default App;
