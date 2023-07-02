import "./App.css";

import Nav from "./components/Nav";
import Planet from "./components/Planet";

function App() {
  return (
    <div className="">
      <Nav />
      <div className="flex-column flex min-h-[100vh] w-full justify-center pt-24">
        <Planet />
      </div>
    </div>
  );
}

export default App;
