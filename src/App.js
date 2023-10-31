import React from "react"
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Headlinecards from "./components/headlinecards/headlinecards";
import Food from "./components/food/food";
import Categories from "./components/categories/categories";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <Headlinecards />
      <Food />
      <Categories/>
    </div>
  );
}

export default App;
