import "./App.css";

import Nav from "./components/Nav";
import Planet from "./components/Planet";

function App() {
  return (
    <div className="flex flex-col">
      <Nav />
      <div className="flex-col flex min-h-[100vh] w-full justify-center pt-24">
        <Planet />
      </div>
    </div>
  );
}

export default App;
