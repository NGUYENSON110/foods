import React from "react"
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Headlinecards from "./components/headlinecards/headlinecards";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <Headlinecards />
    </div>
  );
}

export default App;
