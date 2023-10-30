import React from "react"
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Headlinecards from "./components/headlinecards/headlinecards";
import Food from "./components/food/food";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <Headlinecards />
      <Food />
    </div>
  );
}

export default App;
