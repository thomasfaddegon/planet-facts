import "./App.css";

import Nav from "./components/Nav";
import Planet from "./components/Planet";

function App() {
  return (
    <div className="flex flex-col mb-24">
      <Nav />
      <div className="flex-col flex w-full justify-center items-center pt-12 lg:pt-16 mb-32 md:mb-0">
        <Planet />
      </div>
    </div>
  );
}

export default App;
