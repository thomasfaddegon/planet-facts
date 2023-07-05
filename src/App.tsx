import "./App.css";

import Nav from "./components/Nav";
import Planet from "./components/Planet";

function App() {
  return (
    <div className="flex flex-col pb-24">
      <Nav />
      <div className="flex-col flex min-h-[100vh] w-full justify-center items-center pt-8 lg:pt-16">
        <Planet />
      </div>
    </div>
  );
}

export default App;
